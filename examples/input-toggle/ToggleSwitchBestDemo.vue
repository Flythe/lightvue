<template>
  <div>
    <docs-card-best title="Playground">
      <lv-toggle-switch v-model="modelValue" v-bind="allOptions" />
      <template #props>
        <lv-toggle-switch v-model="allOptions.disabled" label="Disabled" /> <br />
        <lv-toggle-switch v-model="allOptions.dense" label="Dense" /> <br />
        <br />
        <lv-input v-model="allOptions.label" label="Label" /> <br />
        <lv-input v-model="allOptions.labelPosition" label="Label position" /> <br />
        <lv-input v-model="allOptions.inputId" label="Input ID" /> <br />
        <lv-input v-model="allOptions.name" label="Name" /> <br />
        <lv-input v-model="allOptions.icon" label="Icon" /> <br />
      </template>
      <template #code>
        <span class="dy-code-row --empty-row"></span>
        <span class="dy-code-row --tag-row">&nbsp;&lt;lv-button</span>
        <span class="dy-code-row --attribute-row" v-for="(option, name) in enabledOptions" :key="name">
          <pre v-if="option">&nbsp; &nbsp; &nbsp;<span v-if="!stringProps.includes(name)">:</span>{{ name }}=<span>"{{ option }}"</span></pre>
        </span>
        <span class="dy-code-row --tag-row">&nbsp;/&gt;</span>
        <span class="dy-code-row --empty-row"></span>
      </template>
    </docs-card-best>
  </div>
</template>

<script>
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvToggleSwitch from 'lightvue/toggle-switch';
import LvColorpicker from 'lightvue/color-picker';

export default {
  data() {
    return {
      modelValue: false,
      allOptions: {
        inputId: null,
        name: null,
        disabled: false,
        dense: false,
        label: 'This is a toggle switch',
        labelPosition: 'right',
        icon: 'light-icon-alert-circle',
        checkedIcon: null,
        ariaLabelledBy: null
      },
      stringProps: ['label', 'label-position', 'input-id', 'name', 'icon'],
    };
  },
  components: {
    DocsCardBest,
    LvToggleSwitch,
    LvColorpicker,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss"></style>
