document.getElementById('bloodDrawForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج افتراضي

    // الحصول على القيم من النموذج
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;

    // عرض رسالة تأكيد
    const responseMessage = document.getElementById('responseMessage');
    response.textContent = `تم إرسال طلبك، ${name}! سنقوم بالتواصل معك قريبًا على الرقم ${phone}.`;
    responseMessage.style.color = 'green';

    // إعادة تعيين النموذج
    document.getElementById('bloodDrawForm').reset();
});function validateInputs(name, age, phone) {
    const namePattern = /^[a-zA-Z\s]+$/; // اسم يحتوي على حروف فقط
    const phonePattern = /^\d{10}$/; // رقم هاتف مكون من 10 أرقام

    if (!namePattern.test(name)) {
        alert("يرجى إدخال اسم صحيح.");
        return false;
    }

    if (age <= 0) {
        alert("يرجى إدخال عمر صحيح.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("يرجى إدخال رقم هاتف صحيح.");
        return false;
    }

    return true;
}
