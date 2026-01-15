## 과제: YouTube 클론 코딩

### 목표
- 티치몬의 폴더구조와 컨벤션을 똑같이 함으로써 티치몬 프론트 폴더 구조에 관해 자세히 알 수 있어요.
- 유튜브 메인페이지와 유튜브 영상 클릭 시 나오는 상세 페이지 2개만 구현하면 돼요.

### 기술 스택
- 웹 제품: TypeScript, React
- 상태 관리: React-Query, Zustand
- 스타일링: Emotion
- 패키지 매니저: PNPM

### 폴더 구조 규칙 (반드시 준수)
- `src/pages`: 페이지 단위
- `src/containers`: 페이지 내부 섹션/복합 컴포넌트
- `src/components/ui`: 공통 UI 컴포넌트
- `src/components/layout`: 모달 등 레이아웃에 해당되는 컴포넌트
- `src/constants`, `src/types`, `src/utils`, `src/hooks`: 역할별 분리
- `public/assets`, `public/icons`: 정적 리소스

### 컨벤션
- 폴더명: `kebab-case`
- 파일명: `camelCase`
- 컴포넌트 구조: `index.tsx` + `style.ts`
- export/import는 alias(`@/`) 사용
- 타입은 `src/types`에 정의, 상수는 `src/constants`에 정의

### 커밋 컨벤션
- fix, feat, docs, chore 등 해당하는 변경사항에 맞는 것을 골라 사용하면 돼요.
- 형식은 "fix(#이슈번호) :: 내용"으로 작성하면 돼요.

### 참고사항
- 폴더 내부에 .gitkeep은 폴더 유지용으로 작성된 파일이에요. 내부에 파일을 생성했을 경우 .gitkeep은 삭제해주세요.
- 모든 작업은 이슈를 생성해서 진행해주세요. ex) 사이드바 컴포넌트 제작