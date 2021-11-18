# Campaign Management Front-End 개발

캠페인 관리 페이지

https://user-images.githubusercontent.com/37020415/142465271-500bb684-3557-4f63-8105-b4ae0277302f.mov

## 기능

- 첫 렌더링 시 자체 API에 의해 캠페인 정보를 볼 수 있습니다.
- 캠페인 정보를 페이지 별로 볼 수 있습니다.

## 실행법

1. 레포지토리를 클론하고 해당 디렉토리로 이동합니다.
    ```shell
    git clone https://github.com/sounmind/campaign-management-page.git
    cd campaign-management-page
    ```

2. 디렉토리에 `package.json` 파일과 같은 위치에 `.env` 파일을 만들어 api 요청을 위한 url을 작성합니다.  
    작성 예: 
    ```
    SERVER_URL=https://${SPECIAL_NAME}.s3.ap-northeast-2.amazonaws.com/frontend
    ```

3. 프로젝트 실행에 필요한 dependencies 를 다운로드 받습니다.
    ```shell
    npm install
    ```

4. 아래 명령어를 입력하면 자동으로 브라우저에 http://localhost:8080 페이지가 생성됩니다.
    ```shell
    npm run dev
    ```

## 배운 점

- Context API
  - 컨텍스트를 분리하기까지 많은 시행착오가 있었습니다. 결정적으로 거의 마지막까지 잘못된 방법으로 Context를 사용하고 있었습니다. 예를 들어, Context에 Campaign 객체만 저장하고 Pagination 컴포넌트에서 로컬 상태로 페이지를 관리했습니다. 이는 잘못된 방식으로, 조금만 더 큰 프로젝트나 캠페인 정보를 수정해야 하는 컴포넌트가 더 많아졌다면 효율적이지 못한 방식이었습니다. 다행히 마지막 순간에 더 나은 Context 활용 방법을 알아내어 이전 프로젝트에서 사용했던 Redux와 비슷하게 전역 상태를 관리할 수 있었습니다.
- Webpack, Babel
  - 이전 팀 프로젝트에서 웹팩과 바벨로 프로젝트를 빌드 했었으나, 시간이 꽤 지났기 때문에 기억이 희미해져서 다시 복습하는 느낌으로 설정을 했습니다.

## 아쉬운 점

- Context API를 활용하는 방법을 뒤늦게 깨달아 더 잘 활용하지 못한 것 같아 아쉽습니다. Redux의 경우 useSelector로 깊은 객체의 특정 부분만 구독하여 렌더링을 최소화할 수 있었는데, Context API 상에서는 그것이 어떻게 가능한지, 막을 수 없다면 어떻게 최적화를 할 것인지 계속 고민하면 좋을 것 같습니다.
- Typescript의 기본적인 타입과 인터페이스만 사용하고, 제네릭이나 고급 타입을 사용하여 타입을 좀 더 동적으로 활용하지 못한 점이 아쉽습니다.
- 스타일 관련해서 컴포넌트를 더 재사용할 수 있으리라 생각합니다.
- 적절한 단위 테스트를 작성하지 못해서 아쉽습니다.

## 감사의 말씀

- 디자인과 스타일이 제공해주신 페이지에 상세히 나와 있어서 페이지를 구현할 때 도움을 많이 받았습니다. 디자이너와 함께 일한다면 이런 느낌일까? 하며 즐겁게 작업했습니다.
- 과제를 하면서 Context API, Webpack, Typescript를 배우고 컴포넌트 재사용을 고민할 좋은 기회를 주셔서 감사합니다!
