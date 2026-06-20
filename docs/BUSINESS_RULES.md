BR-001
Commission is calculated before discounts.

BR-002
Room allocation occurs after preparation stage.

BR-003
Therapists remain locked until treatment completion.

BR-004
Treatment rooms remain locked until treatment completion.

BR-005 – Discount Calculation

Reception staff may enter either:

* Discount Percentage (%)
  OR
* Discount Amount (Rs.)

System behavior:

1. If Discount Percentage is entered:

   * System automatically calculates Discount Amount.
   * Discount Amount = (Treatment Price + VAS Amount) × Discount %

2. If Discount Amount is entered:

   * System automatically calculates Discount Percentage.

3. Both fields remain synchronized.

4. Discount is always calculated on:
   Treatment Price + VAS Amount

5. Commission is always calculated BEFORE discount.

Example:

Treatment Price = Rs. 5,000
VAS Amount = Rs. 1,000
Discount % = 10

Commission Base = Rs. 6,000
Discount Amount = Rs. 600
Guest Pays = Rs. 5,400


BR-006 – Changing Room Management

1. Two changing rooms are available:

   * CR-1
   * CR-2

2. After payment and booking confirmation:

   * Guest is assigned a free changing room.

3. Standard preparation time:

   * 5 minutes

4. During preparation:

   * Booking Status = Preparing
   * Treatment Room = Reserved
   * Therapist = Reserved

5. Operator may manually:

   * Skip preparation time
   * Start treatment immediately

6. When preparation ends:

   * Guest moves to allocated treatment room
   * Treatment timer starts

7. If both changing rooms are occupied:

   * Guest enters Changing Room Queue
   * First available changing room is assigned automatically


BR-007 – Commission Basis Configuration

The commission basis is controlled by the system administrator.

Available modes:

1. Treatment Only
2. Treatment + VAS

The selected mode is stored in the Settings table.

Receptionists and cashiers can view the current mode but cannot modify it.

Any change applies to future bookings only.

BR-008
Guest receipts must never show commissions.

BR-009 Room Privacy Locking
A room is privacy-based

BR-010 Group Sharing Exception
BR-011 Steam Queue Workflow
