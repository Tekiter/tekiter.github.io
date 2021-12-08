import { DateSpan } from "@/utils/ndate";

export interface Project {
  name: string;
  link?: string;
  date: DateSpan;
  description: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    name: "당뻔",
    link: "https://github.com/sopkathon99s/client",
    date: DateSpan.create("2021/11"),
    description: [
      "번개 모임 매칭을 도와주는 웹 서비스",
      "기획, 디자인, 프론트엔드, 서버 파트로 나뉘어 진행",
      "프론트엔드 파트의 리더를 담당",
      "파트간 원활한 소통으로 시간 안에 성공적으로 완성",
      "상태 담당 컴포넌트와 레이아웃 담당 컴포넌트를 따로 만들어 관심사를 분리",
    ],
    techStack: ["TypeScript", "React", "Styled-Components"],
  },
  {
    name: "LogicKingElectric",
    link: "https://github.com/Tekiter/LogicKingElectric",
    date: DateSpan.create("2021/06", "2021/08"),
    description: [
      "재생 에너지 발전 예측량 정보를 관리하는 서비스",
      "API 서버 전체와, 프론트엔드의 API 호출 연결을 담당",
      "모노레포 구조 프로젝트",
      "같은 API 타입을 프론트엔드와 백엔드가 공유하게 설계, 타입 정의가 API 정의가 되도록 함",
      "프론트엔드에서 API 호출 커스텀 훅으로 추상화",
      "의존성 분리를 적극적으로 사용",
      "저수준인 데이터 접근과 컨트롤러 로직을 의존성 주입",
      "Jest 기반 테스트 작성",
    ],
    techStack: [
      "TypeScript",
      "Node.js",
      "Express",
      "React",
      "Next.js",
      "Recoil",
      "Jest",
    ],
  },
];
