ISIWARA AURA – GUEST JOURNEY STATE MACHINE

STATE 1
PENDING

Guest inquiry received.
No payment yet.

↓

STATE 2
CONFIRMED

Payment completed.
Booking created.

↓

STATE 3
PREPARING

Changing room assigned.

Preparation timer running.

Default:
5 Minutes

Operator may skip.

↓

STATE 4
IN_TREATMENT

Treatment started.

Actions:

* Treatment Room Locked
* Therapist Locked
* Treatment Timer Running

↓

STATE 5
WAITING_STEAM

Treatment completed.

Actions:

* Treatment Room Released
* Therapist Released

Guest waiting for steam facility.

↓

STATE 6
IN_STEAM

Steam facility assigned.

Steam timer running.

Default:
20 Minutes

↓

STATE 7
COMPLETED

All treatment services completed.

Guest may:

* Drink herbal tea
* Rest
* Purchase products

↓

STATE 8
DEPARTED

Operator confirms guest has left premises.

Booking fully completed.
