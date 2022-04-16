interface IObjectKeys {
  [key: string]: {
    [key: string]: string;
  };
}

interface IObjectKey {
  [key: string]: string;
}

export interface IValidationMessage extends IObjectKeys {
  login: {
    required: string;
    email: string;
  };
  password: {
    required: string;
    minlength: string;
    hasNumber: string;
    hasCapitalCase: string;
    hasSmallCase: string;
    hasSpecialCharacters: string;
  };
  title: {
    required: string;
    minlength: string;
    maxlength: string;
  };
  description: {
    maxlength: string;
  };
  img: {
    required: string;
    checkUrl: string;
  };
  videoLink: {
    required: string;
    checkUrl: string;
  };
  date: {
    required: string;
    checkDate: string;
  };
}

export interface IFormError extends IObjectKey {
  login: string;
  password: string;
  title: string;
  description: string;
  img: string;
  videoLink: string;
  date: string;
}
