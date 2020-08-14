import http from "./httpServices";

const workspaceApiEndpoint = "http://localhost:5000/v1/api/auth/workspace";
const loginApiEndpoint = "http://localhost:5000/v1/api/auth/login";

export function submitWorkspace(data) {
  const result = http.post(workspaceApiEndpoint, data);
  return result;
}

export function submitLoginCredentials(data) {
  const result = http.post(loginApiEndpoint, data);
  return result;
}

export default {
  submitWorkspace,
  submitLoginCredentials,
};
