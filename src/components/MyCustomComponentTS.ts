import Vue from 'vue'
import Component from 'vue-class-component'

// The @Component decorator indicates the class is a Vue component
@Component({
  render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag name
      this.$slots.default // array of children
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
export default class MyComponent extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'Hello!'

  // Component methods can be declared as instance methods
  onClick (): void {
    window.alert(this.message)
  }
}

/*** 
export default 
 {
    render: function (createElement) {
      return createElement(
        'h' + this.level,   // tag name
        this.$slots.default // array of children
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  }

  */
  