<script setup>
import { computed } from 'vue'
import data from '../../data/portal-data.json'

function statusClass(status) {
  const s = (status || '').toUpperCase()
  if (s.includes('APPROVED')) return 'approved'
  if (s.includes('UNDER REVIEW')) return 'under-review'
  if (s.includes('IN PROGRESS')) return 'in-progress'
  if (s.includes('PLANNED')) return 'planned'
  if (s.includes('OPEN')) return 'open'
  if (s.includes('DEFERRED')) return 'deferred'
  if (s.includes('NOT YET FORMALISED')) return 'unknown'
  return 'unknown'
}

const workstreams = computed(() => data.workstreams || [])
</script>

<template>
  <div class="workstream-grid">
    <a
      v-for="w in workstreams"
      :key="w.id"
      class="workstream-card"
      :href="w.href"
    >
      <span class="status-badge" :class="`status-${statusClass(w.status)}`">{{ w.status }}</span>
      <h3 class="workstream-card__name">{{ w.name }}</h3>
      <p class="workstream-card__detail">{{ w.detail }}</p>
      <p class="workstream-card__evidence">Evidence: {{ w.evidence }}</p>
    </a>
  </div>
</template>
