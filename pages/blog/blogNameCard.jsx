const named = ({ article }) => {
  [
    {
      images:
        "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gq0apu1PD7a7CqOHIhBArl~bIVo-TtIjVdtNPzYI3U13v6LkYU4dudQGRaoBg0M3cX1VzoIe~RhtqAWDoAfVHELubbTG3T8Nx5SFvB7JSmKqsaSH1~Jh3AeFWm3ITqK7nw97fQCvV4VL6rVl-CkkTc0UGld2gkGacsKuuPyC2PbV8qBwrB3LgzsquLj5jJzLbNu9Saex2izoe5SUEe4eXh8jPl2tY3~W~qjNP8~OvaVWMomkGXlADmj3o5DnnWEsclCVrKopeE0IvoYvam81tHy35UCS-6Y62QXHF5Y3tHw6bUUJtAliCS-yOeRQrB9kfTh7dqnNnXb3XnEAh0DByQ__",
      name: "Ernie Smith",
    },
    {
      images:
        "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gq0apu1PD7a7CqOHIhBArl~bIVo-TtIjVdtNPzYI3U13v6LkYU4dudQGRaoBg0M3cX1VzoIe~RhtqAWDoAfVHELubbTG3T8Nx5SFvB7JSmKqsaSH1~Jh3AeFWm3ITqK7nw97fQCvV4VL6rVl-CkkTc0UGld2gkGacsKuuPyC2PbV8qBwrB3LgzsquLj5jJzLbNu9Saex2izoe5SUEe4eXh8jPl2tY3~W~qjNP8~OvaVWMomkGXlADmj3o5DnnWEsclCVrKopeE0IvoYvam81tHy35UCS-6Y62QXHF5Y3tHw6bUUJtAliCS-yOeRQrB9kfTh7dqnNnXb3XnEAh0DByQ__",
      name: "Eric Smith",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/40b7/c131/faedfd7f834c47ba118f3895ffc519cd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FnQ9Zaop704ExZ4sxAZWUlxXLfrD3RIfqr5FeUm4eG62GkSd3ZUaSdvX5l9amlzw8umhJP1ii2HD9WSpQXXTPznk0twc3yuMBnG6R3PRleHwJ6QcJzxOGOjEjYQvjCwWgdbs2wk8cTFSPYPT0~3AjDshKWyTFboKLg44AJm5tnrWQFWqM9hPA6fQnwLyfO3daz85J58xXYrEGynEN2~xZLcQJ-0aNzdNoao-iWESZYZ4M2vNfKLSOo8iISJNVCaO2odkXQKtkaIBpZbYX9n0j2RCJTI6UdvC-mo5c9i1RfiwWbGhMP2SXgzp8NX57~4CtB9i2W9d~MT7eZLM-iobCg__",
      name: "Tracey Wilson",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gq0apu1PD7a7CqOHIhBArl~bIVo-TtIjVdtNPzYI3U13v6LkYU4dudQGRaoBg0M3cX1VzoIe~RhtqAWDoAfVHELubbTG3T8Nx5SFvB7JSmKqsaSH1~Jh3AeFWm3ITqK7nw97fQCvV4VL6rVl-CkkTc0UGld2gkGacsKuuPyC2PbV8qBwrB3LgzsquLj5jJzLbNu9Saex2izoe5SUEe4eXh8jPl2tY3~W~qjNP8~OvaVWMomkGXlADmj3o5DnnWEsclCVrKopeE0IvoYvam81tHy35UCS-6Y62QXHF5Y3tHw6bUUJtAliCS-yOeRQrB9kfTh7dqnNnXb3XnEAh0DByQ__",
      name: "Ernie Smith",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gq0apu1PD7a7CqOHIhBArl~bIVo-TtIjVdtNPzYI3U13v6LkYU4dudQGRaoBg0M3cX1VzoIe~RhtqAWDoAfVHELubbTG3T8Nx5SFvB7JSmKqsaSH1~Jh3AeFWm3ITqK7nw97fQCvV4VL6rVl-CkkTc0UGld2gkGacsKuuPyC2PbV8qBwrB3LgzsquLj5jJzLbNu9Saex2izoe5SUEe4eXh8jPl2tY3~W~qjNP8~OvaVWMomkGXlADmj3o5DnnWEsclCVrKopeE0IvoYvam81tHy35UCS-6Y62QXHF5Y3tHw6bUUJtAliCS-yOeRQrB9kfTh7dqnNnXb3XnEAh0DByQ__",
      name: "Eric Smith",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/40b7/c131/faedfd7f834c47ba118f3895ffc519cd?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FnQ9Zaop704ExZ4sxAZWUlxXLfrD3RIfqr5FeUm4eG62GkSd3ZUaSdvX5l9amlzw8umhJP1ii2HD9WSpQXXTPznk0twc3yuMBnG6R3PRleHwJ6QcJzxOGOjEjYQvjCwWgdbs2wk8cTFSPYPT0~3AjDshKWyTFboKLg44AJm5tnrWQFWqM9hPA6fQnwLyfO3daz85J58xXYrEGynEN2~xZLcQJ-0aNzdNoao-iWESZYZ4M2vNfKLSOo8iISJNVCaO2odkXQKtkaIBpZbYX9n0j2RCJTI6UdvC-mo5c9i1RfiwWbGhMP2SXgzp8NX57~4CtB9i2W9d~MT7eZLM-iobCg__",
      name: "Tracey Wilson",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/f952/fa47/9a54dc57c3bfdd71f8ab78628ef9ac9a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aiKYfhDrGmfJV8k5inXJK4BZVfMpuWmO77aEObJWxttMvkJIegjYuV-3sdtQuyhIOfHBChpoCCdOR9p3vtO5zO4SgPFQKwdFssmlIePvesoogN~AMS63qF4jCXqbMD1ClYaL1PgdMC30yyg9RLh9HPOJnFQ-ZPgoK34GMyNkR8JyQgpw8PJNo4DggwWKse6hwckaWUhiUIyVNPZNPbZl-WZubkcJwkXz7IoMhyIUtoOEzHwk6~tot9AWw1vAjmxmDvNmW~EGR3ySfGC3TWPUamC5r3x8I~2kZkvCvQn9Z1YXvRRNRsUo-cc4Z9EeivRB~kNEJuvm1EdsnS61FlEsIg__",
      name: "Jason Francisco",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/db37/dd67/9040be5d5b5b374674cba3ba9bae96c7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HAyt8jaqt6~7X15iXTJqns4SgngELy3hwAKxSu-wD8rI276E1c7i9VzNqmnqrh0u3xVX7-1esc1dER8F4jjRnPWJDnvnU7rBq7NgohEfxcNJAYpGYfvYtI2byel5vyZWMMcDDTEeJqyByH3Z4kLFboYcSnQx-J8Je-olD3eOeszAr~Ft5dYf0z60VXTpi86E-9zrXINs0tKlaMdEAOLPh0zurg~WppxMOBJXaAUfOIe0z2Ko8FQn9Qb7IDZMsKUgclIN-njfkrCLwGC5hU-QCQuwTozuLuICGg69cXiOpm5GChqwvUCPmGwc6Pus8neKsBvXsO3vSN6f9bLU7VKnTg__",
      name: "Elizabeth Slavin",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gq0apu1PD7a7CqOHIhBArl~bIVo-TtIjVdtNPzYI3U13v6LkYU4dudQGRaoBg0M3cX1VzoIe~RhtqAWDoAfVHELubbTG3T8Nx5SFvB7JSmKqsaSH1~Jh3AeFWm3ITqK7nw97fQCvV4VL6rVl-CkkTc0UGld2gkGacsKuuPyC2PbV8qBwrB3LgzsquLj5jJzLbNu9Saex2izoe5SUEe4eXh8jPl2tY3~W~qjNP8~OvaVWMomkGXlADmj3o5DnnWEsclCVrKopeE0IvoYvam81tHy35UCS-6Y62QXHF5Y3tHw6bUUJtAliCS-yOeRQrB9kfTh7dqnNnXb3XnEAh0DByQ__",
      name: "Ernie Smith",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/f952/fa47/9a54dc57c3bfdd71f8ab78628ef9ac9a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aiKYfhDrGmfJV8k5inXJK4BZVfMpuWmO77aEObJWxttMvkJIegjYuV-3sdtQuyhIOfHBChpoCCdOR9p3vtO5zO4SgPFQKwdFssmlIePvesoogN~AMS63qF4jCXqbMD1ClYaL1PgdMC30yyg9RLh9HPOJnFQ-ZPgoK34GMyNkR8JyQgpw8PJNo4DggwWKse6hwckaWUhiUIyVNPZNPbZl-WZubkcJwkXz7IoMhyIUtoOEzHwk6~tot9AWw1vAjmxmDvNmW~EGR3ySfGC3TWPUamC5r3x8I~2kZkvCvQn9Z1YXvRRNRsUo-cc4Z9EeivRB~kNEJuvm1EdsnS61FlEsIg__",
      name: "Jason Francisco",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/db37/dd67/9040be5d5b5b374674cba3ba9bae96c7?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HAyt8jaqt6~7X15iXTJqns4SgngELy3hwAKxSu-wD8rI276E1c7i9VzNqmnqrh0u3xVX7-1esc1dER8F4jjRnPWJDnvnU7rBq7NgohEfxcNJAYpGYfvYtI2byel5vyZWMMcDDTEeJqyByH3Z4kLFboYcSnQx-J8Je-olD3eOeszAr~Ft5dYf0z60VXTpi86E-9zrXINs0tKlaMdEAOLPh0zurg~WppxMOBJXaAUfOIe0z2Ko8FQn9Qb7IDZMsKUgclIN-njfkrCLwGC5hU-QCQuwTozuLuICGg69cXiOpm5GChqwvUCPmGwc6Pus8neKsBvXsO3vSN6f9bLU7VKnTg__",
      name: "Elizabeth Slavin",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gq0apu1PD7a7CqOHIhBArl~bIVo-TtIjVdtNPzYI3U13v6LkYU4dudQGRaoBg0M3cX1VzoIe~RhtqAWDoAfVHELubbTG3T8Nx5SFvB7JSmKqsaSH1~Jh3AeFWm3ITqK7nw97fQCvV4VL6rVl-CkkTc0UGld2gkGacsKuuPyC2PbV8qBwrB3LgzsquLj5jJzLbNu9Saex2izoe5SUEe4eXh8jPl2tY3~W~qjNP8~OvaVWMomkGXlADmj3o5DnnWEsclCVrKopeE0IvoYvam81tHy35UCS-6Y62QXHF5Y3tHw6bUUJtAliCS-yOeRQrB9kfTh7dqnNnXb3XnEAh0DByQ__",
      name: "Ernie Smith",
    },
  ];
};

export default named;
