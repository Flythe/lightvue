<template>
  <div class="d-toggle__wrapper" @click="updateValue($event)">
    <label
      v-if="label && labelPosition === 'left'"
      :for="inputId ? inputId : name"
      class="d-toggle__label d-toggle__label--left"
      >{{ label }}</label
    >

    <div :class="containerClass">
      <input
        type="checkbox"
        role="switch"
        class="d-toggle__input"
        ref="input"
        v-bind="$attrs"
        :id="inputId"
        :name="name"
        :checked="modelValue"
        :disabled="disabled"
        @focus="onFocus($event)"
        @blur="onBlur($event)"
        @keydown.enter.prevent="updateValue($event)"
        :aria-checked="value"
        :aria-labelledby="ariaLabelledBy"
      />

      <div class="d-toggle__track"></div>
      <div class="d-toggle__thumb">
        <i aria-hidden="true" role="presentation" :class="icon" v-if="icon"></i>
      </div>
    </div>

    <label
      v-if="label && labelPosition !== 'left'"
      :for="inputId ? inputId : name"
      class="d-toggle__label"
      >{{ label }}</label
    >
  </div>
</template>

<script>
export default {
  name: 'LvToggleswitch',
  inheritAttrs: false,

  props: {
    value: Boolean,
    inputId: String,
    name: String,
    disabled: Boolean,
    dense: Boolean,
    label: String,
    labelPosition: {
      type: String,
      default: 'right'
    },
    icon: String,
    ariaLabelledBy: null,
    uncheckedThumbColor: {
      type: String,
      default: '#cbd5e0'
    },
    checkedThumbColor: {
      type: String,
      default: '#38b2ac'
    },
    uncheckedTrackColor: {
      type: String,
      default: '#edf2f7'
    },
    checkedTrackColor: {
      type: String,
      default: '#d7efed'
    }
  },
  data() {
    return {
      focused: false,
    };
  },
  computed: {
    trackColor() {
      return this.modelValue ? this.checkedTrackColor : this.uncheckedTrackColor;
    },
    thumbColor() {
      return this.modelValue ? this.checkedThumbColor : this.uncheckedThumbColor;
    },
    modelValue() {
      return this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
    },
    containerClass() {
      return [
        "d-toggle__inner",
        {
          "--checked": this.modelValue,
          "--disabled": this.disabled,
          "--dense": this.dense,
        },
      ];
    },
  },
  methods: {
    updateValue(event) {
      if (!this.disabled) {
        this.$emit("input-native", event);
        this.$emit("update:modelValue", !this.modelValue);
        this.$emit("change", event);
        this.$emit("click", event);

        this.$refs.input.focus();
      }
    },
    onFocus(event) {
      this.focused = true;
      this.$emit("focus", event);
    },
    onBlur(event) {
      this.focused = false;
      this.$emit("blur", event);
    },
  },
};
</script>
<style lang="scss">
@import "./ToggleSwitch.scss";

.d-toggle__wrapper {
  .d-toggle__inner {
    .d-toggle__track {
      // background: #edf2f7;
      background: v-bind(trackColor);
    }

    .d-toggle__thumb {
      // background-color: #cbd5e0;
      background: v-bind(thumbColor);
    }

    &.--checked {
      .d-toggle__track {
        // background: #d7efed;
        background: v-bind(trackColor);
      }

      .d-toggle__thumb {
        // background: #38b2ac;
        background: v-bind(thumbColor);
      }
    }
  }
}
</style>
