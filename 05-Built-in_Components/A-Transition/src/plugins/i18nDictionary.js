export default {
  "zh-Hans": {
    common: ["切换", "增加"],
    example1: [
      "由 v-if 所触发的切换",
      "由 v-show 所触发的切换",
      "Son1: 由特殊元素 <component> 切换的动态组件",
      "Son2: 由特殊元素 <component> 切换的动态组件",
      "改变特殊的 key 属性",
      "切换"
    ],
    example2: {
      title: "为过渡效果命名",
      btn: ["上一个", "下一个"],
      content: [
        "我们可以给 <Transition> 组件传一个 name prop 来声明一个过渡效果名：",
        "对于一个有名字的过渡效果，对它起作用的过渡 class 会以其名字而不是 v 作为前缀",
        "比如，上方例子中被应用的 class 将会是 fade-enter-active 而不是 v-enter-active。"
      ]
    },
    example3: {
      title: "CSS 的 transition",
      btn: ["上一个", "下一个"],
      content: [
        "<Transition> 一般都会搭配原生 CSS 过渡一起使用",
        "这个 transition CSS 属性是一个简写形式",
        "它使我们可以一次定义一个过渡的各个方面，包括需要执行动画的属性、持续时间和速度曲线"
      ]
    },
    example4: {
      title: "CSS 的 animation",
      btn: ["上一个", "下一个"],
      content: [
        "原生 CSS 动画和 CSS transition 的应用方式基本上是相同的，只有一点不同",
        "那就是 *-enter-from 不是在元素插入后立即移除，而是在一个 animationend 事件触发时被移除",
        "对于大多数的 CSS 动画，我们可以简单地在 *-enter-active 和 *-leave-active class 下声明它们"
      ]
    },
    example5: "自定义过渡 class",
    example6: {
      title: "同时使用 transition 和 animation",
      btn: ["上一个", "下一个"],
      content: [
        "单独使用transition 和animation 的原生CSS属性，Vue可以通过对transitionend 或animationend 事件添加监听器来探测正确的类型",
        "然而在某些场景中，或许想要在同一个元素上同时使用它们两个，举例来说，Vue 触发了一个 CSS 动画，同时鼠标悬停触发另一个 CSS 过渡",
        "此时你需要显式地传入 type prop 来声明，告诉 Vue 需要关心哪种类型，传入的值是 animation 或 transition ，以确定*-enter-from 类名的移除时机"
      ]
    },
    example10: ["例子 10", "子组件"]
  },
  en: {
    common: ["Toggle", "Addition"],
    example1: [
      "Conditional rendering via v-if",
      "Conditional display via v-show",
      "Son1: Dynamic components toggling via the <component> special element",
      "Son2: Dynamic components toggling via the <component> special element",
      "Changing the special key attribute",
      "Toggle"
    ],
    example2: {
      title: "Named Transitions",
      btn: ["Previous", "Next"],
      content: [
        "A transition can be named via the name prop:",
        "For a named transition, its transition classes will be prefixed with its name instead of v.",
        "For example, the applied class for the above transition will be fade-enter-active instead of v-enter-active."
      ]
    },
    example3: {
      title: "CSS Transitions",
      btn: ["Previous", "Next"],
      content: [
        "<Transition> is most commonly used in combination with native CSS transitions,",
        "The transition CSS property is a shorthand that allows us to specify multiple aspects of a transition",
        "It includes properties that should be animated, duration of the transition, and easing curves."
      ]
    },
    example4: {
      title: "Named Transitions",
      btn: ["Previous", "Next"],
      content: [
        "Native CSS animations are applied in the same way as CSS transitions, ",
        "with the difference being that *-enter-from is not removed immediately after the element is inserted, but on an animationend event.",
        "For most CSS animations, we can simply declare them under the *-enter-active and *-leave-active classes. "
      ]
    },
    example5: "Custom Transition Classes",
    example6: {
      title: "Using Transitions and Animations Together",
      btn: ["Previous", "Next"],
      content: [
        "Vue needs to attach event listeners in order to know when a transition has ended. ",
        "It can either be transitionend or animationend, depending on the type of CSS rules applied.",
        "However, in some cases you may want to have both on the same element, for example having a CSS animation triggered by Vue, along with a CSS transition effect on hover."
      ]
    },
    example10: ["Example 10", "Son Component"]
  }
};
