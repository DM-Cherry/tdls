/* eslint-disable prefer-destructuring */
export default function(string) {
  const nargs = /\{([0-9a-zA-Z_]+)\}/g;
  let args;
  // eslint-disable-next-line prefer-rest-params
  if (arguments.length === 2 && typeof arguments[1] === 'object') {
    // eslint-disable-next-line prefer-rest-params
    args = arguments[1];
  } else {
    args = new Array(arguments.length - 1);
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < arguments.length; i++) {
      // eslint-disable-next-line prefer-rest-params
      args[i - 1] = arguments[i];
    }
  }

  if (!args || !args.hasOwnProperty) {
    args = {};
  }

  return string.replace(nargs, function replaceArg(match, i, index) {
    let result;

    if (string[index - 1] === '{' && string[index + match.length] === '}') {
      return i;
    }
    // eslint-disable-next-line prefer-const
    result = Object.prototype.hasOwnProperty.call(args, i) ? args[i] : null;
    if (result === null || result === undefined) {
      return '';
    }

    return result;
  });
}
