const insertMark = (string, pos, len) => {
  return string.slice(0, pos) + '<strong>' + string.slice(pos, pos + len) + '</strong>' + string.slice(pos + len);
};

export { insertMark }
