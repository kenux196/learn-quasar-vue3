<template>
  <div class="text-h3 text-center">카드 만들기</div>
  <div class="row justify-end q-pb-sm">
    <q-btn dense icon="add" round color="positive" @click="addMember"></q-btn>
  </div>
  <div class="row q-col-gutter-lg">
    <div v-for="m in members" :key="m.mid" class="col-6 col-md-4">
      <q-btn v-if="!m.editable" unelevated dense flat size="sm" color="grey" icon="edit" @click="m.editable = true" />
      <q-btn v-else unelevated dense round size="sm" color="primary" icon="check" @click="store(m.mid)" />
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
import { uid, useQuasar } from 'quasar';
import { reactive, defineAsyncComponent } from 'vue';

const MemberCard = defineAsyncComponent(() => import('../components/MemberCard.vue'));

const $q = useQuasar();
const members = reactive($q.sessionStorage.getItem('members') || []);

const addMember = () => {
  members.unshift({
    mid: uid(),
    name: '',
    team: '',
    contact: '',
    editable: false,
  });
};

const update = (mid, key, val) => {
  const findMember = getMember(mid);
  if (findMember) {
    findMember[key] = val;
  }
};

const store = (mid) => {
  const tempMembers = $q.sessionStorage.getItem('members') || [];
  const findMember = getMember(mid);
  const findTempMember = tempMembers.find((m) => m.mid === mid);

  if (findMember) {
    findMember.editable = false;

    if (findTempMember) {
      findTempMember.name = findMember.name;
      findTempMember.team = findMember.team;
      findTempMember.contact = findMember.concat;
    } else {
      tempMembers.unshift(findMember);
    }

    $q.sessionStorage.set('members', tempMembers);
  }
};

function getMember(mid) {
  return members.find((m) => m.mid === mid);
}
</script>

<style lang="scss" scoped></style>
