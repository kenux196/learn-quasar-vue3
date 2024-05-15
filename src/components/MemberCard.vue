<template>
  <q-card>
    <div class="text-center bg-primary text-white">멤버</div>
    <q-card-section>
      <q-input
        v-model="name"
        :readonly="!editable"
        dense
        :borderless="!editable"
        @update:model-value="(val) => emit('update', props.mid, 'name', val)"
      />
      <q-input
        v-model="team"
        :readonly="!editable"
        dense
        :borderless="!editable"
        @update:model-value="(val) => emit('update', props.mid, 'team', val)"
      />
      <q-input
        v-model="contact"
        :readonly="!editable"
        dense
        :borderless="!editable"
        @update:model-value="(val) => emit('update', props.mid, 'contact', val)"
      />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  mid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  team: {
    type: String,
    default: '',
  },
  contact: {
    type: String,
    default: '',
  },
  editable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update']);

const name = ref(props.name);
const team = ref(props.team);
const contact = ref(props.contact);
</script>

<style lang="scss" scoped></style>
