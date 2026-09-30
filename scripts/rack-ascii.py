import random, json
from PIL import Image, ImageDraw, ImageFilter
random.seed(7)
COLS, ROWS = 124, 72
CW, CH = 12, 25                     # supersampled cell size (px)
W, H = COLS*CW, ROWS*CH
im = Image.new('L', (W, H), 250)
d = ImageDraw.Draw(im)
def R(c0, r0, c1, r1, tone):        # rect in cell coords (c1,r1 exclusive)
    d.rectangle([c0*CW, r0*CH, c1*CW-1, r1*CH-1], fill=tone)
def vgrad(c0, r0, c1, r1, t0, t1):
    y0, y1 = int(r0*CH), int(r1*CH)
    for y in range(y0, y1):
        t = t0 + (t1-t0)*(y-y0)/max(1, y1-y0-1)
        d.line([c0*CW, y, c1*CW-1, y], fill=int(t))
def hgrad(c0, r0, c1, r1, t0, t1):
    x0, x1 = int(c0*CW), int(c1*CW)
    for x in range(x0, x1):
        t = t0 + (t1-t0)*(x-x0)/max(1, x1-x0-1)
        d.line([x, r0*CH, x, r1*CH-1], fill=int(t))

# floor: soft shadow + horizon
d.ellipse([12*CW, 62.8*CH, 100*CW, 66.2*CH], fill=196)

# cabinet
X0, X1 = 18, 94          # outer
TOP, BOT = 2, 63
R(X0, TOP, X1, BOT, 8)
hgrad(X0, TOP, X0+2, BOT, 120, 10)       # left side sheen
hgrad(X1-2, TOP, X1, BOT, 10, 90)
vgrad(X0, TOP, X1, TOP+3, 140, 10)       # top cap
R(X0+26, TOP+1, X1-26, TOP+2, 250)      # name plate
vgrad(X0, BOT-2, X1, BOT, 40, 0)       # plinth
for c in (X0+2, X1-6): R(c, BOT, c+4, BOT+1, 20)   # feet

# rails with square holes
RL0, RL1 = X0+2, X0+4
RR0, RR1 = X1-4, X1-2
for c0 in (RL0, RR0):
    R(c0, TOP+3, c0+2, BOT-2, 205)
    for r in range(TOP+3, BOT-2):
        d.rectangle([ (c0+0.6)*CW, (r+0.3)*CH, (c0+1.4)*CW, (r+0.7)*CH ], fill=5)

IN0, IN1 = RL1, RR0       # usable width (cols)
units = []                # (name, u_height)
layout = [
    ('patch', 1, 'PATCH PANEL  24P CAT6'),
    ('switch', 1, 'CORE SWITCH  48P'),
    ('switch', 1, 'ACCESS SWITCH  48P'),
    ('brush', 1, 'CABLE MANAGER'),
    ('firewall', 1, 'NGFW  FIREWALL'),
    ('router', 1, 'EDGE ROUTER'),
    ('server2', 2, 'SIEM  WAZUH / ELK'),
    ('server2', 2, 'HYPERVISOR  VMWARE'),
    ('nas', 2, 'NAS  STORAGE'),
    ('ups', 2, 'UPS  3KVA'),
]
UH = 4                   # rows per U
leds = []                # (col,row,kind)
labels = []              # (row, text)
r = TOP + 3
unum = sum(h for _,h,_ in layout)
for kind, h, name in layout:
    r0, r1 = r, r + h*UH
    # faceplate with bevel
    vgrad(IN0, r0, IN1, r1, 215, 140)
    hgrad(IN0, r0+0.3, IN0+6, r1-0.3, 160, 205)
    R(IN0, r0, IN1, r0+0.2, 250)
    R(IN0, r1-0.16, IN1, r1, 0)
    # ears/screws
    for c in (IN0, IN1-1):
        R(c, r0, c+1, r1, 120)
        d.ellipse([(c+0.3)*CW, (r0+0.9)*CH, (c+0.7)*CW, (r0+1.25)*CH], fill=250)
    a0, a1 = IN0+2, IN1-2
    mid = r0 + 1
    if kind == 'patch':
        R(a0, r0+0.3, a1, r0+0.8, 252)             # label strip
        R(a0, r0+0.95, a1, r1-0.3, 30)
        for g in range(4):
            gx = a0 + 2 + g*16
            for p in range(6):
                c = gx + p*2.3
                R(c, r0+1.3, c+1.4, r0+3.0, 0)
                R(c+0.35, r0+3.0, c+1.05, r0+3.35, 0)
    elif kind == 'brush':
        R(a0, r0+0.9, a1, r1-0.9, 18)
        for i in range(int((a1-a0)/0.5)):
            x = (a0 + i*0.5)*CW
            d.line([x, (r0+1.0)*CH, x+3, (r1-1.0)*CH], fill=110)
        for c in range(a0+4, a1-3, 12):                # D-rings
            d.ellipse([c*CW, (r0+0.4)*CH, (c+2)*CW, (r1-0.4)*CH], outline=250, width=7)
    elif kind == 'switch':
        R(a0, r0+0.3, a0+7, r1-0.3, 20)               # brand/console block
        R(a0+1, r0+1, a0+3, r0+2, 240)                # console port
        base = a0 + 10
        for blk in range(4):
            bx = base + blk*11.5
            for row in range(2):
                for p in range(6):
                    c = bx + p*1.75
                    rr = r0 + 1.0 + row*1.5
                    R(c, rr, c+1.3, rr+1.2, 0)
                    leds.append((c, r0 + (0.35 if row == 0 else 3.55), 'act'))
        for p in range(4):                            # SFP uplinks
            R(a1-8+p*1.9, r0+1.0, a1-8+p*1.9+1.4, r0+3.0, 20)
    elif kind == 'firewall':
        R(a0, r0+0.6, a0+12, r1-0.6, 0)              # LCD
        R(a0+0.8, r0+1.1, a0+11.2, r1-1.1, 150)
        for p in range(8):
            c = a0 + 15 + p*2.3
            R(c, r0+1.0, c+1.5, r0+2.9, 0)
        for p in range(3):
            leds.append((a1-4+p*1, r0+1, 'sys'))
        R(a1-8, r0+0.9, a1-5, r0+2.1, 250)
    elif kind == 'router':
        for p in range(4):
            c = a0 + 3 + p*2.3
            R(c, r0+1.0, c+1.5, r0+2.9, 0)
        R(a0+14, r0+0.8, a0+24, r0+3.2, 60)           # modules
        R(a0+26, r0+0.8, a0+36, r0+3.2, 60)
        for c in range(a0+40, a1-3, 2):
            R(c, r0+1.0, c+1, r0+3.0, 50)             # vents
        leds.append((a1-2, r0+1, 'sys'))
    elif kind == 'blank':
        for c in range(a0, a1, 2):
            R(c+0.3, r0+1.1, c+1.1, r0+1.9, 60)
    elif kind in ('server2', 'server1'):
        bays = 12 if kind == 'server2' else 8
        bw = 3.4
        for i in range(bays):
            c = a0 + i*(bw+0.35)
            R(c, r0+0.4, c+bw, r1-0.4, 245)
            R(c+0.2, r0+0.7, c+bw-0.2, r0+1.2, 20)    # handle slot
            leds.append((c+1.5, r1-1.6, 'act'))
        vx = a0 + bays*(bw+0.35) + 0.5
        for c in range(int(vx), a1-3):
            R(c+0.2, r0+0.6, c+0.7, r1-0.6, 15)       # grille
        leds.append((a1-2, r0+1, 'sys'))
    elif kind == 'kvm':
        R(a0, r0+0.8, a1, r1-0.6, 25)
        R(a0+18, r0+0.4, a0+26, r0+1.1, 250)          # handle
    elif kind == 'nas':
        for row in range(2):
            for i in range(6):
                c = a0 + 1 + i*7.4
                rr = r0 + 0.6 + row*3.5
                R(c, rr, c+6.8, rr+3.0, 245)
                R(c+0.3, rr+0.4, c+4.3, rr+0.9, 20)
                leds.append((c+5.5, rr+2.0, 'act'))
        R(a1-9, r0+1.2, a1-2, r1-1.2, 5)                 # status screen
        R(a1-8.3, r0+1.9, a1-2.7, r1-1.9, 140)
    elif kind == 'ups':
        R(a0+2, r0+1.4, a0+16, r1-1.4, 5)                # display
        R(a0+2.8, r0+2.2, a0+15.2, r1-2.2, 160)
        for c in range(a0+22, a1-2):
            for rr in range(r0+1, r1-1):
                R(c+0.25, rr+0.25, c+0.75, rr+0.75, 10)
        leds.append((a0+18.5, r0+3, 'sys')); leds.append((a0+18.5, r0+5, 'sys'))
    elif kind == 'pdu':
        for i in range(8):
            c = a0 + 2 + i*5
            R(c, r0+0.7, c+2.6, r1-0.7, 5)
            R(c+0.8, r0+1.2, c+1.8, r1-1.2, 240)
    if name:
        labels.append((r0 + (h*UH)/2, name))
    r = r1

# light from upper-left: gentle vignette on the cabinet
mask = Image.new('L', (W, H), 0)
im = im.filter(ImageFilter.GaussianBlur(0.6))
K = 1.5
COLS, ROWS = int(COLS*K), int(ROWS*K)
small = im.resize((COLS, ROWS), Image.BOX)
px = small.load()

LEVELS = [
    (22,  "@",  'k0'),
    (48,  "#",  'k0'),
    (74,  "8",  'k1'),
    (100, "0",  'k1'),
    (126, "5",  'k1'),
    (150, "3",  'k2'),
    (174, "=",  'k2'),
    (198, "+",  'k3'),
    (222, ":",  'k3'),
    (242, ".",  'k4'),
    (256, " ",  'k4'),
]
grid = [[(' ', 'k4') for _ in range(COLS)] for _ in range(ROWS)]
for y in range(ROWS):
    for x in range(COLS):
        t = px[x, y]
        for lim, pool, cls in LEVELS:
            if t < lim:
                ch = random.choice(pool)
                if pool == " " and random.random() < 0.02:
                    ch = random.choice("0123456789ABCDEF")
                grid[y][x] = (ch, cls)
                break

# LEDs
for c, rr, kind in leds:
    c, rr = int(c*K), int(rr*K)
    if 0 <= rr < ROWS and 0 <= c < COLS:
        grid[rr][c] = ('*' if kind == 'act' else 'o', 'led-a' if kind == 'act' else 'led-s')

# name plate text
plate = "LAB RACK 01"
pc = int((X0 + X1)*K/2) - len(plate)//2
for i, ch in enumerate(plate):
    grid[int((TOP+1.5)*K)][pc+i] = (ch, 'k0')

# U numbers on the left, labels on the right
u = unum
rr = TOP + 3
for kind, h, name in layout:
    for k in range(h):
        s = f"{u:02d}"
        row = int((rr + k*UH + UH/2)*K)
        for i, ch in enumerate(s):
            grid[row][int(X0*K)-5+i] = (ch, 'k3')
        u -= 1
    rr += h*UH
for row, name in labels:
    text = "--- " + name
    row = int(row*K)
    for i, ch in enumerate(text):
        x = int(X1*K) + 2 + i
        if x < COLS:
            grid[row][x] = (ch, 'lbl' if i > 3 else 'k3')

# run-length encode by class
out = []
for y in range(ROWS):
    runs = []
    for ch, cls in grid[y]:
        if runs and runs[-1][0] == cls:
            runs[-1][1] += ch
        else:
            runs.append([cls, ch])
    out.append(runs)
src = "/* Generated by scripts/rack-ascii.py (python3 scripts/rack-ascii.py). A 14U lab rack rendered as characters. */\n"
src += "export type Run = [string, string];\n"
src += "export const rackRows: Run[][] = " + json.dumps(out, separators=(',', ':')) + ";\n"
open('data/rackAscii.ts', 'w').write(src)
print(len(leds), sum(len(r) for r in out))
