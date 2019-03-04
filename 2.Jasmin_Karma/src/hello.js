const Hello = {
  message: 'Hello',
  greeting() {
    return this.message + ' '  + this.getName();
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

      return this.name || 'world';
  },
  print(el) {
    if(!el instanceof jQuery) {
      throw new Error('파라매터는 제이쿼리 객체이어야 합니다');
    }
    el.text(this.greeting());
  }
};
