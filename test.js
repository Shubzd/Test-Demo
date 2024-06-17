document.addEventListener('DOMContentLoaded', () => {
    const allPagesCheckbox = document.querySelector('.card label:first-child input');
    const checkboxes = document.querySelectorAll('.card input[type="checkbox"]');

    allPagesCheckbox.addEventListener('change', () => {
        const isChecked = allPagesCheckbox.checked;
        checkboxes.forEach(checkbox => {
            checkbox.checked = isChecked;
        });
    });

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (!checkbox.checked) {
                allPagesCheckbox.checked = false;
            } else {
                const allChecked = Array.from(checkboxes).every(cb => cb.checked);
                if (allChecked) {
                    allPagesCheckbox.checked = true;
                }
            }
        });
    });
});