interface ServiceInit {
  status: "init";
}

interface ServiceLoading {
  status: "loading";
}

interface ServiceLoaded<T> {
  status: "loaded";
  payload: any;
}

interface ServiceError {
  status: "error";
  error: Error;
}

export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
