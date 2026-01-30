// ฟังก์ชันเมื่อคลิกที่การ์ดสมาชิก (เผื่อขยายไปหน้าดูฝ่ายต่างๆ)
function showDepartment(deptName) {
    alert("คุณกำลังเข้าสู่หน้า: " + deptName);
    // ในอนาคตสามารถใช้ window.location.href = 'dept-details.html';
}

// ตัวอย่างการทำ Animation เล็กน้อยเวลา Scroll
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Loaded Successfully!");
    
    const cards = document.querySelectorAll('.member-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('h3').innerText;
            console.log("Viewing profile: " + name);
        });
    });
});