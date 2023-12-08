# BravoStudio

Build your own personal web page with tiny modification of config file !

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Introduction

This is a project based on `react` and `chakra-ui`, you can use it to deploy your own personal web page easily. With this personal web page, you can show yourself and post your projects, photos and videos on it. If this project helps you, please give me a star ~  See the [demo](https://www.bravolu.cn)

## Getting Started

### Prerequisites

* node.js
* npm

### Installation

```bash
# Clone the repository
git clone https://github.com/BravoLu/BravoStudio.git

# Change into the project directory
cd BravoStudio

# Install dependencies
npm install

# start on development environment
npm run dev
```

### Configuration

Your can change the config.yaml file to build your own web page, this is my config.yaml
```yaml
name: "Bravo's Studio"
email: "lushaohao3@gmail.com"
githubUrl: "https://github.com/BravoLu"
selfIntro: "I am LU, Shaohao
  from Zhuhai, Guangdong, China. I am a both software engineer and algorithm engineer.
  I got both the bachelor and the master degree in Sun-Yat-Sen University.
  This is a personal website to record my life."
xiaohongshuUrl: "https://www.xiaohongshu.com/user/profile/5ceb4de00000000011033330"
linkedinUrl: "https://www.linkedin.com/in/shaohao-lu-a6a307248/"
youtubeUrl: "https://www.youtube.com/channel/UCklK7aT_dImwJhG3gAve1Pw"
notionUrl: "https://www.notion.so/BravoLu-5ea3a398f8824c8488e3da2be0133ff4?pvs=4"
twitterUrl: "https://twitter.com/BravoLu30"
mediumUrl: "https://medium.com/@lushaohao3"
githubAuth: "U2FsdGVkX1/w8cFgZabt+qdUB0L5xvHPmfaOMI4azafiIoTf8ShYyZMqQ+c7iOnns2UUKxzCdf3uGQFVLPb0vA=="
githubUser: "BravoLu"
photoCategory:
  [
    {
      title: "Countries",
      subcategories: ["Singapore", "Sri Lanka", "Indonesia", "Thailand"],
    },
    { title: "Cities", subcategories: ["Zhuhai", "Xinjiang"] },
    {
      title: "Daily Life",
      subcategories: ["Workout"]  
    }
  ]
```
