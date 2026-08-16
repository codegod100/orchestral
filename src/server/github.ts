/**
 * Minimal GitHub OAuth (Authorization Code) + REST helpers.
 *
 * Requires a GitHub OAuth App (Settings → Developer settings → OAuth Apps)
 * with its callback URL set to `${ORCHESTRAL_URL}/api/github/callback`.
 */

const GITHUB_AUTHORIZE_URL = "https://github.com/login/oauth/authorize";
const GITHUB_TOKEN_URL = "https://github.com/login/oauth/access_token";
const GITHUB_API = "https://api.github.com";

export function buildGithubAuthorizeUrl(opts: {
  clientId: string;
  redirectUri: string;
  state: string;
  scope?: string;
}): string {
  const url = new URL(GITHUB_AUTHORIZE_URL);
  url.searchParams.set("client_id", opts.clientId);
  url.searchParams.set("redirect_uri", opts.redirectUri);
  url.searchParams.set("state", opts.state);
  url.searchParams.set("scope", opts.scope ?? "repo read:user");
  return url.toString();
}

export async function exchangeGithubCode(opts: {
  clientId: string;
  clientSecret: string;
  code: string;
  redirectUri: string;
}): Promise<{ access_token: string; scope: string; token_type: string }> {
  const res = await fetch(GITHUB_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      client_id: opts.clientId,
      client_secret: opts.clientSecret,
      code: opts.code,
      redirect_uri: opts.redirectUri,
    }),
  });
  const data = await res.json();
  if (data.error) throw new Error(data.error_description || data.error);
  return data;
}

export async function getGithubUser(token: string): Promise<{ login: string; avatar_url: string }> {
  const res = await fetch(`${GITHUB_API}/user`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

export interface GithubRepo {
  full_name: string;
  private: boolean;
  default_branch: string;
  html_url: string;
  updated_at: string;
}

export async function listGithubRepos(token: string): Promise<GithubRepo[]> {
  const repos: GithubRepo[] = [];
  let page = 1;
  while (page <= 5) {
    const res = await fetch(
      `${GITHUB_API}/user/repos?per_page=100&page=${page}&sort=updated&affiliation=owner,collaborator`,
      { headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
    const batch = (await res.json()) as GithubRepo[];
    repos.push(...batch);
    if (batch.length < 100) break;
    page++;
  }
  return repos;
}
