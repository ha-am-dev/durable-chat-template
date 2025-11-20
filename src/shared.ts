export type ChatMessage = {
  id: string;
  content: string;
  user: string;
  role: "user" | "assistant";
};

export type Message =
  | {
      type: "add";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "update";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "all";
      messages: ChatMessage[];
    };

export const names = [
  "김춘식",
  "밥",
  "엄",
  "준식",
  "이브",
  "프랭크",
  "자동차",
  "나무",
  "이발",
  "미용",
  "케빈",
  "히히",
  "메리",
  "크리스마스",
  "고양이",
  "강아지",
  "거북이",
  "토끼",
  "사계절",
  "봄",
  "가을",
  "여름",
  "겨울",
  "치킨",
  "개구쟁이",
  "동물원",
];
