const data = [
  {
    id: 0,
    title: `서울 강남구 축구하실 분 구합니다 `,
    city: 0,
    sportsTypes: [5],
    content:
      '강남역 근처 풋살장에서 축구하실 분 구합니다. 연령 상관 없습니다. 편하게 댓글 남겨 주세요',
    date: '2021-12-13',
    recruit: true,
    likeCount: 10,
    owner: { id: 0, nickname: '강남구원펀치' },
    comments: [
      {
        id: 1,
        content: 'ㅋㅋㅋ 닉네임 웃기네요',
        date: '2021-12-13',
        owner: { id: 1, nickname: '도봉구왕주먹' },
      },
      {
        id: 2,
        content: '강남역 근처에 풋살장도 있었나',
        date: '2021-12-14',
        owner: { id: 2, nickname: '한강러닝머신건' },
      },
    ],
  },
];

export default data;
