// Global variable to track seasonal effect state
export let isEffectEnabled = false;

// Function to update the state
export function setEffectState(enabled: boolean) {
  isEffectEnabled = enabled;
}
