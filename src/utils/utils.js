export function uploadingChanges(isLoading, element, content) {
  if (isLoading) {
    element.textContent = 'Сохранение...'
  } else {
    element.textContent = content
  }
}