# HZY RandomCredit
## 启动方式
```
npm run dev 或者
yarn dev
```
## 完成情况
- 实现了Task总结中的所有需求
- 技术栈：Next.js / Next Router / Tailwind CSS / Ant-Design / axios / js-cookie / react-hook-form
- 未更改config
## 功能介绍
- 主页     ~~（天气之子背景和毛玻璃是不是还挺好看）~~
 ￼![图片](assets/IMG_1.png)
- 欢迎￼! 用的是Ant design的modal组件
![图片](assets/IMG_2.png)
- 提交时会检查有没有填完整
 ￼![图片](assets/IMG_3.png)
- 点击登录后跳转到绩杀页 /lesson
￼![图片](assets/IMG_5.png)
- 点击刷新会重新加载数据，或者弹出cookie过期的提示，点击ok会跳转回首页
￼![图片](assets/IMG_6.png)
## 感想
~~面向Google的编程~~
- 不过确实一路碰到了一连串大大小小的bug，这时候就很需要借助stackOverflow，同时各种框架的文档也是会边做边学。解决一个bug需要很长时间，但是bug解出来那一刻比王者pena kill还要开心。

- 比如让我印象比较深刻的一个bug是form中点击**欢迎**按钮之后页面总会先渲染msg，然后整个页面又重新渲染了，一开始以为是useEffect或者setState的问题，但是过了很长时间还是找不到bug真的怀疑人生……后来不知道为啥突然想起来好像以前学原生的时候form会有一个prevenyDefault，才意识到第二次渲染是因为表单提交触发。

- 关于感觉这两个页面虽然工程不大，但是还是**push我输入并熟悉了很多内容**，之前听说过Ant design但是没有用过，看视频别人写axios和tailwind css但是自己都是第一次写（然后发现这俩真的**超级方便**）我现在感觉前端学习真的是**知识点、经验和实操三者**相结合，在不断debug的过程之中我逐渐将之前看过别人的best practice比如form内化了很多，前后端交互这块知识点我一直觉得对我是个难点，虽然还需要进一步学习cookie相关的知识点，但是这次使用js-cookie框架get cookie为我更深入理解它打下了基础
- 还有就是**关于轮子**，感觉antd这样的框架确实很大提升了开发效率，但是又感觉它不够灵活，实际开发也不太可能全用组件框架（不过我感觉tailwind倒是兼顾了效率和灵活）。所以可能类似于手写走马灯这样的面试题还是有存在的必要，这也是我以后还要学的部分

## BTW
呜呜我真的真的好想加入求是潮啊，这半年我一直把加入求是潮作为我的学习目标，希望这次能够成功




