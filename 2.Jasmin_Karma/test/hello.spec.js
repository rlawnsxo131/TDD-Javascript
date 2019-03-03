describe('Hello 모듈의', ()=> {
  describe('greeting 함수는', ()=>{
    it('인사 문자열을 반환한다', ()=> {
      const expectedStr = Hello.message + ' world',
            actualStr = Hello.greeting();
      expect(actualStr).toBe(expectedStr); // 두 값이 같은지 비교
    });
    it('getName 함수를 호출한다', () => {
      spyOn(Hello, 'getName');
      Hello.greeting();
      expect(Hello.getName).toHaveBeenCalled(); //함수호출 검사
    });
  });

  describe('getName 함수는', () => {
    let request,
        callbackSpy;

    beforeEach(() => { // 테스트 케이스 실행 전 테스트 환경 구성
      jasmine.Ajax.install(); // ajax 요청을 캡쳐하기 위한 mock을 만든다
      callbackSpy = jasmine.createSpy('callback'); // 스파이 생성
      Hello.getName(callbackSpy);
      request = jasmine.Ajax.requests.mostRecent();
      response = { // response 더미 데이타
        status: 200,
        responseText: 'Chris'
      };
      request.respondWith(response); // ajax 요청 응답 흉내
    });
    afterEach(() => jasmine.Ajax.uninstall()); //테스트 케이스 종료후 정리작업

    it('HTTP 요청을 보낸다', () => {
      const expectUrl = 'http://name';
      expect(request.url).toBe(expectUrl);
    });
    it('http 응답이 오면 콜백함수를 실행한다', () => {
      expect(callbackSpy).toHaveBeenCalled();
    });
    it('콜백함수 파라매터로 이름을 반환한다.', () => {
      //스파이 함수가 실행될 때 어떤 인자로 실행되었는지 검사
      expect(callbackSpy).toHaveBeenCalledWith(response.responseText);
    });
  })
});

