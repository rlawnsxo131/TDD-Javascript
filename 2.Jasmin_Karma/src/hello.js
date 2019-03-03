const Hello = {
  message: 'Hello',
  greeting() {
    return `${this.message} ${this.getName()}`;
  },
  getName(cb) {
    const req = new XMLHttpRequest();
      req.open('GET', 'http://name', true);
      req.onreadystatechange = () => {
        if(req.readyState === 4) {
          cb(req.responseText);
        } else {
          cb("ajax error")
        }
      }
      req.send(null);

      return 'world';
  }
};
