import { computed } from 'vue';

export function useColor(color: string | undefined) {
  return computed(() => (color ? `text-${color}` : ''));
}
