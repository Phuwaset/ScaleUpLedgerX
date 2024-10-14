from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.platypus import Table, TableStyle

def create_invoice(invoice_number, customer_name, items, total, tax_rate, filename):
    c = canvas.Canvas(filename, pagesize=A4)
    width, height = A4

    # ข้อมูลร้านค้า
    c.setFont("Helvetica-Bold", 20)
    c.drawString(30, height - 30, "Your Company Name")

    # รายละเอียดใบกำกับภาษี
    c.setFont("Helvetica", 12)
    c.drawString(30, height - 60, f"Invoice Number: {invoice_number}")
    c.drawString(30, height - 80, f"Customer: {customer_name}")

    # ตารางรายการสินค้า
    table_data = [["Item", "Quantity", "Unit Price", "Total Price"]]
    for item in items:
        name, quantity, unit_price = item
        total_price = quantity * unit_price
        table_data.append([name, quantity, f"${unit_price:.2f}", f"${total_price:.2f}"])

    table = Table(table_data, colWidths=[100, 100, 100, 100])
    table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, 0), colors.grey),
        ('TEXTCOLOR', (0, 0), (-1, 0), colors.whitesmoke),
        ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
        ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
        ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
        ('BACKGROUND', (0, 1), (-1, -1), colors.beige),
        ('GRID', (0, 0), (-1, -1), 1, colors.black),
    ]))

    table.wrapOn(c, width, height)
    table.drawOn(c, 30, height - 300)

    # คำนวณภาษีและยอดรวม
    tax = total * tax_rate
    grand_total = total + tax

    c.drawString(30, height - 320, f"Subtotal: ${total:.2f}")
    c.drawString(30, height - 340, f"Tax ({tax_rate * 100}%): ${tax:.2f}")
    c.setFont("Helvetica-Bold", 14)
    c.drawString(30, height - 360, f"Grand Total: ${grand_total:.2f}")

    # บันทึกไฟล์ PDF
    c.save()

# ข้อมูลตัวอย่าง
invoice_number = "INV202401"
customer_name = "John Doe"
items = [
    ("Product A", 2, 50.00),
    ("Product B", 1, 100.00),
    ("Product C", 3, 30.00),
]
total = sum(quantity * unit_price for _, quantity, unit_price in items)
tax_rate = 0.07  # ภาษี 7%
filename = "invoice.pdf"

# สร้างใบกำกับภาษี
create_invoice(invoice_number, customer_name, items, total, tax_rate, filename)

print(f"Invoice created: {filename}")
