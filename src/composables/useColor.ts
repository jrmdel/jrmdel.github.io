import { computed } from 'vue';

export function useColor(color: string) {
  return computed(() => (color.length > 0 ? `text-${color}` : ''));
}
