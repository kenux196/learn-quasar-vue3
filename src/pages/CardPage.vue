<template>
  <div class="text-h3 text-center">카드 만들기</div>
  <div class="row justify-end q-pb-sm">
    <q-btn dense icon="add" round color="positive" @click="addMember"></q-btn>
  </div>
  <div class="row q-col-gutter-lg">
    <div v-for="m in members" :key="m.name" class="col-6 col-md-4">
      <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit" @click="m.editable = true" />
      <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="m.editable = false" />
      <member-card
        :mid="m.mid"
        :name="m.name"
        :team="m.team"
        :contact="m.contact"
        :editable="m.editable"
        @update="update"
      ></member-card>
    </div>
  </div>
  <div class="bg-grey q-mt-md">
    <p><b>Member Data</b></p>
    <p>
      {{ members }}
    </p>
  </div>
</template>

<script setup>
import { uid } from 'quasar';
import { reactive, defineAsyncComponent } from 'vue';

const members = reactive([
  { mid: uid(), name: '디에잇', team: '세븐틴', contact: '010-1234-1234', editable: false },
  { mid: uid(), name: '도겸', team: '세븐틴', contact: '010-1234-1111', editable: false },
  { mid: uid(), name: '안유진', team: '아이브', contact: '010-1234-2222', editable: false },
  { mid: uid(), name: '아이유', team: '아이유', contact: '010-1234-2222', editable: false },
  { mid: uid(), name: '장원영', team: '아이브', contact: '010-1234-2222', editable: false },
]);

const MemberCard = defineAsyncComponent(() => import('../components/MemberCard.vue'));

const addMember = () => {
  members.unshift({
    mid: uid(),
    name: '',
    team: '',
    contact: '',
    editable: '',
  });
};

const update = (mid, key, val) => {
  console.log(`${mid} : ${key} : ${val}`);
  const findMember = members.find((m) => m.mid === mid);
  if (findMember) {
    findMember[key] = val;
  }
};
</script>

<style lang="scss" scoped></style>
