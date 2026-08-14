/**
 * A2A (Agent2Agent) Protocol types.
 * Based on the A2A specification: https://a2a-protocol.org/latest/specification
 */

// ─── Agent Card ───────────────────────────────────────────────────────────

export interface AgentCard {
  protocolVersion: string;
  name: string;
  description?: string;
  url: string;
  preferredTransport?: string;
  additionalInterfaces?: AgentInterface[];
  version?: string;
  documentationUrl?: string;
  iconUrl?: string;
  provider?: AgentProvider;
  capabilities: AgentCapabilities;
  defaultInputModes: string[];
  defaultOutputModes: string[];
  skills: AgentSkill[];
  securitySchemes?: Record<string, SecurityScheme>;
  security?: Record<string, string[]>[];
  supportsAuthenticatedExtendedCard?: boolean;
}

export interface AgentInterface {
  protocolBinding: string;
  url: string;
  protocolVersion?: string;
}

export interface AgentProvider {
  organization: string;
  url?: string;
}

export interface AgentCapabilities {
  streaming?: boolean;
  pushNotifications?: boolean;
  stateTransitionHistory?: boolean;
  extendedAgentCard?: boolean;
}

export interface AgentSkill {
  id: string;
  name: string;
  description?: string;
  tags?: string[];
  examples?: string[];
  inputModes?: string[];
  outputModes?: string[];
  securitySchemes?: string[];
}

// ─── Security Schemes ─────────────────────────────────────────────────────

export type SecurityScheme =
  | { apiKeySecurityScheme: APIKeySecurityScheme }
  | { httpAuthSecurityScheme: HTTPAuthSecurityScheme }
  | { oauth2SecurityScheme: OAuth2SecurityScheme }
  | { openIdConnectSecurityScheme: OpenIdConnectSecurityScheme }
  | { mutualTLSSecurityScheme: MutualTLSSecurityScheme };

export interface APIKeySecurityScheme {
  type: "apiKey";
  name: string;
  location: "query" | "header" | "cookie";
  description?: string;
}

export interface HTTPAuthSecurityScheme {
  type: "http";
  scheme: string;
  bearerFormat?: string;
  description?: string;
}

export interface OAuth2SecurityScheme {
  type: "oauth2";
  flows: OAuthFlows;
  description?: string;
}

export interface OpenIdConnectSecurityScheme {
  type: "openIdConnect";
  openIdConnectUrl: string;
  description?: string;
}

export interface MutualTLSSecurityScheme {
  type: "mutualTLS";
  description?: string;
}

export interface OAuthFlows {
  authorizationCode?: AuthorizationCodeOAuthFlow;
  clientCredentials?: ClientCredentialsOAuthFlow;
  deviceCode?: DeviceCodeOAuthFlow;
}

export interface AuthorizationCodeOAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes: Record<string, string>;
}

export interface ClientCredentialsOAuthFlow {
  tokenUrl: string;
  refreshUrl?: string;
  scopes: Record<string, string>;
}

export interface DeviceCodeOAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
  refreshUrl?: string;
  scopes: Record<string, string>;
}

// ─── Messages & Tasks ──────────────────────────────────────────────────────

export interface Message {
  role: "ROLE_USER" | "ROLE_AGENT";
  parts: Part[];
  messageId: string;
  taskId?: string;
  contextId?: string;
  kind?: string;
}

export type Part = TextPart | DataPart | FilePart;

export interface TextPart {
  kind: "text";
  text: string;
}

export interface DataPart {
  kind: "data";
  data: Record<string, unknown>;
}

export interface FilePart {
  kind: "file";
  file: { uri?: string; bytes?: string; mimeType?: string; name?: string };
}

export interface Task {
  id: string;
  contextId: string;
  status: TaskStatus;
  history?: Message[];
  artifacts?: Artifact[];
  kind?: string;
}

export interface TaskStatus {
  state: TaskState;
  message?: Message;
  timestamp?: string;
}

export type TaskState =
  | "TASK_STATE_SUBMITTED"
  | "TASK_STATE_WORKING"
  | "TASK_STATE_INPUT_REQUIRED"
  | "TASK_STATE_COMPLETED"
  | "TASK_STATE_FAILED"
  | "TASK_STATE_CANCELED"
  | "TASK_STATE_REJECTED"
  | "TASK_STATE_AUTH_REQUIRED"
  | "TASK_STATE_UNKNOWN";

export interface Artifact {
  artifactId: string;
  name?: string;
  description?: string;
  parts: Part[];
}

// ─── Request/Response ──────────────────────────────────────────────────────

export interface SendMessageRequest {
  message: Message;
  configuration?: SendMessageConfiguration;
  metadata?: Record<string, unknown>;
}

export interface SendMessageConfiguration {
  acceptedOutputModes?: string[];
  blocking?: boolean;
  historyLength?: number;
}

export type SendMessageResponse =
  | { task: Task }
  | { message: Message };

// ─── Streaming ─────────────────────────────────────────────────────────────

export type StreamResponse =
  | { task: Task }
  | { message: Message }
  | { statusUpdate: TaskStatusUpdateEvent }
  | { artifactUpdate: TaskArtifactUpdateEvent };

export interface TaskStatusUpdateEvent {
  taskId: string;
  contextId: string;
  status: TaskStatus;
  final: boolean;
  kind: string;
}

export interface TaskArtifactUpdateEvent {
  taskId: string;
  contextId: string;
  artifact: Artifact;
  append?: boolean;
  lastChunk?: boolean;
  kind: string;
}
