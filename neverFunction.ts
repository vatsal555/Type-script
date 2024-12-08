const apiError = (msg: string, code: number): never => {
  throw { message: msg, apiCode: code };
};

console.log(apiError("server side error", 500));
