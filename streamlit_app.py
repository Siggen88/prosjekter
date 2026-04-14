import streamlit as st

st.set_page_config(
    page_title="Ferd Eiendom — Prosjektportal",
    page_icon="🏗️",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# ── Data ──────────────────────────────────────────────────────────────────────
INITIAL_PROJECTS = [
    {"id": 1, "name": "Humlehagen", "sted": "Ensjø, Oslo", "status": "Ferdigstilt",
     "type": "Leiligheter og rekkehus", "boliger": 142, "bra": "36–135 m²",
     "img": "https://ferdeiendom.no/wp-content/uploads/2024/07/fotograf-Knut-Neerland_B_11670-1024x768.jpg",
     "url": "https://ferdeiendom.no/bolig/humlehagen/",
     "fremdrift": 100, "budsjett": 480, "paalopte": 480, "salgsstart": None},
    {"id": 2, "name": "Bråtejordet", "sted": "Strømmen", "status": "Ferdigstilt",
     "type": "Rekkehus og leiligheter", "boliger": None, "bra": None,
     "img": "https://ferdeiendom.no/wp-content/uploads/2022/09/Bratejordet-1024x579.jpg",
     "url": "https://ferdeiendom.no/bolig/bratejordet/",
     "fremdrift": 100, "budsjett": 320, "paalopte": 320, "salgsstart": None},
    {"id": 3, "name": "Kleven Gård", "sted": "Bekkestua, Bærum", "status": "Under utvikling",
     "type": "Leiligheter", "boliger": None, "bra": None,
     "img": "https://ferdeiendom.no/wp-content/uploads/2022/09/Kleven-Gard_Eksterior_Vinkel-02_Hus_1-5_6-9_10-14_15-19_v6_3mb_3destate.no_-1024x512.jpg",
     "url": "https://ferdeiendom.no/bolig/kleven-gard/",
     "fremdrift": 35, "budsjett": 290, "paalopte": 102, "salgsstart": None},
    {"id": 4, "name": "Kobberkvartalet", "sted": "Vestre Billingstad", "status": "Under utvikling",
     "type": "Leiligheter", "boliger": None, "bra": None,
     "img": "https://ferdeiendom.no/wp-content/uploads/2025/02/KOBBER3-1024x576.jpg",
     "url": "https://ferdeiendom.no/bolig/vestre-billigstad/",
     "fremdrift": 20, "budsjett": 450, "paalopte": 90, "salgsstart": None},
    {"id": 5, "name": "Sander kvartal", "sted": "Ski sentrum", "status": "Til salgs",
     "type": "Leiligheter og næring", "boliger": 210, "bra": "30–128 m²",
     "img": "https://ferdeiendom.no/wp-content/uploads/2022/07/Sander-kvartal-nettside-1534-x-1022-px-1-e1772438107438-1024x570.jpg",
     "url": "https://ferdeiendom.no/bolig/sander-kvartal/",
     "fremdrift": 15, "budsjett": 620, "paalopte": 93, "salgsstart": "15. apr 2026"},
    {"id": 6, "name": "Skolekvartalet", "sted": "Ski", "status": "Under utvikling",
     "type": "Leiligheter og rekkehus", "boliger": 228, "bra": "21 500 m²",
     "img": "https://ferdeiendom.no/wp-content/uploads/2022/07/Skolekvartalet-nettside-1534-x-1022-px-2-1024x682.png",
     "url": "https://ferdeiendom.no/bolig/skolekvartalet/",
     "fremdrift": 25, "budsjett": 520, "paalopte": 130, "salgsstart": None},
    {"id": 7, "name": "Høyda", "sted": "Moss", "status": "Under utvikling",
     "type": "Rekkehus og leiligheter", "boliger": 800, "bra": "75 000 m²",
     "img": "https://ferdeiendom.no/wp-content/uploads/2022/09/hoyda_4-1024x819.jpg",
     "url": "https://ferdeiendom.no/bolig/hoyda-2/",
     "fremdrift": 10, "budsjett": 2800, "paalopte": 280, "salgsstart": None},
    {"id": 8, "name": "Marienlyst", "sted": "Oslo", "status": "Under utvikling",
     "type": "Kultur og bolig", "boliger": None, "bra": None,
     "img": "https://ferdeiendom.no/wp-content/uploads/2026/01/Marienlyst-nettside-1536x864.jpg-1024x576.webp",
     "url": "https://ferdeiendom.no/bolig/marienlyst/",
     "fremdrift": 5, "budsjett": 3500, "paalopte": 175, "salgsstart": None},
    {"id": 9, "name": "Hamangskogen", "sted": "Sandvika, Bærum", "status": "Under utvikling",
     "type": "Leiligheter og næring", "boliger": None, "bra": "12 000 m²",
     "img": "https://ferdeiendom.no/wp-content/uploads/2022/10/Hamangskogen-1024x522.jpg",
     "url": "https://ferdeiendom.no/bolig/hamangskogen-10/",
     "fremdrift": 5, "budsjett": 380, "paalopte": 19, "salgsstart": "2030"},
    {"id": 10, "name": "Markalléen", "sted": "Høvik, Bærum", "status": "Under utvikling",
     "type": "Leiligheter", "boliger": None, "bra": "17 000 m²",
     "img": "https://ferdeiendom.no/wp-content/uploads/2022/09/Kleven-Gård-0059-skjerm-1024x682.jpg",
     "url": "https://ferdeiendom.no/bolig/markalleen/",
     "fremdrift": 3, "budsjett": 540, "paalopte": 16, "salgsstart": "2030"},
]

STATUS_OPTIONS = ["Under utvikling", "Til salgs", "Ferdigstilt", "Regulering", "Konsept"]
TYPE_OPTIONS = [
    "Leiligheter", "Rekkehus", "Leiligheter og rekkehus", "Rekkehus og leiligheter",
    "Leiligheter og næring", "Kultur og bolig", "Eneboliger", "Næring",
]

STATUS_COLORS = {
    "Ferdigstilt":     ("#EAF3DE", "#3B6D11"),
    "Til salgs":       ("#FAEEDA", "#854F0B"),
    "Under utvikling": ("#E6F1FB", "#185FA5"),
    "Regulering":      ("#f3f2ee", "#555555"),
    "Konsept":         ("#f3f2ee", "#555555"),
}

# ── Session state ─────────────────────────────────────────────────────────────
if "projects" not in st.session_state:
    st.session_state.projects = list(INITIAL_PROJECTS)

# ── Global CSS ────────────────────────────────────────────────────────────────
st.markdown("""<style>
.stApp { background: #f7f5f0; }
#MainMenu, footer { visibility: hidden; }
.block-container { padding-top: 1rem !important; max-width: 1400px; }
div[data-testid="stMetric"] {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 16px 20px;
}
div[data-testid="stMetric"] label {
    font-size: 10px !important;
    font-weight: 600 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    color: #9ca3af !important;
}
div[data-testid="stMetric"] div[data-testid="stMetricValue"] {
    font-size: 26px !important;
    font-weight: 600 !important;
}
</style>""", unsafe_allow_html=True)

# ── Helpers ───────────────────────────────────────────────────────────────────
def progress_color(p):
    if p == 100: return "#3B6D11"
    if p >= 25:  return "#185FA5"
    if p >= 10:  return "#854F0B"
    return "#aaaaaa"

def render_badge(status):
    bg, color = STATUS_COLORS.get(status, ("#f3f2ee", "#555"))
    st.markdown(
        f'<span style="background:{bg};color:{color};font-size:11px;font-weight:600;'
        f'padding:3px 10px;border-radius:999px;display:inline-block">{status}</span>',
        unsafe_allow_html=True,
    )

def render_progress_bar(pct, color):
    st.markdown(
        f'<div style="height:5px;background:#f0f0f0;border-radius:999px;overflow:hidden">'
        f'<div style="width:{pct}%;height:100%;background:{color};border-radius:999px"></div>'
        f'</div>',
        unsafe_allow_html=True,
    )

def render_project_card(p):
    with st.container(border=True):
        # Image
        if p.get("img"):
            st.image(p["img"], use_container_width=True)
        else:
            st.markdown(
                '<div style="height:120px;background:#f7f5f0;border-radius:8px;'
                'display:flex;align-items:center;justify-content:center;font-size:32px">🏗️</div>',
                unsafe_allow_html=True,
            )

        render_badge(p["status"])

        # Name and location
        st.markdown(f"**{p['name']}**")
        st.caption(f"📍 {p['sted']}")
        st.caption(p["type"])

        meta = (
            f"{p['boliger']} boliger" if p.get("boliger")
            else (p.get("bra") or "")
        )
        if meta:
            st.caption(meta)

        if p.get("salgsstart"):
            st.markdown(
                f'<span style="font-size:11px;color:#854F0B">Salgsstart: {p["salgsstart"]}</span>',
                unsafe_allow_html=True,
            )

        st.divider()

        # Progress
        pc = progress_color(p["fremdrift"])
        col_a, col_b = st.columns([3, 1])
        col_a.caption("Fremdrift")
        col_b.markdown(
            f'<div style="text-align:right;font-size:12px;font-weight:600;color:#374151">{p["fremdrift"]}%</div>',
            unsafe_allow_html=True,
        )
        render_progress_bar(p["fremdrift"], pc)

        budget_left, budget_right = st.columns(2)
        budget_left.caption(f"{p['paalopte']} MNOK påløpt")
        budget_right.markdown(
            f'<div style="text-align:right;font-size:11px;color:#9ca3af">{p["budsjett"]} MNOK totalt</div>',
            unsafe_allow_html=True,
        )

        if p.get("url"):
            st.link_button("Åpne prosjektside →", p["url"], use_container_width=True)


# ── New project dialog ────────────────────────────────────────────────────────
@st.dialog("Nytt prosjekt", width="large")
def new_project_dialog():
    with st.form("new_project_form"):
        c1, c2 = st.columns(2)
        name = c1.text_input("Prosjektnavn *", placeholder="f.eks. Strandparken")
        sted = c2.text_input("Sted *", placeholder="f.eks. Lysaker, Bærum")

        c3, c4 = st.columns(2)
        status = c3.selectbox("Status", STATUS_OPTIONS)
        ptype  = c4.selectbox("Boligtype", TYPE_OPTIONS)

        c5, c6 = st.columns(2)
        boliger  = c5.number_input("Antall boliger", min_value=0, value=0, step=1)
        bra      = c6.text_input("BRA", placeholder="f.eks. 12 500 m²")

        c7, c8 = st.columns(2)
        budsjett = c7.number_input("Budsjett (MNOK) *", min_value=1, value=100, step=10)
        paalopte = c8.number_input("Påløpt kostnad (MNOK)", min_value=0, value=0, step=10)

        fremdrift   = st.slider("Fremdrift (%)", 0, 100, 0)
        salgsstart  = st.text_input("Salgsstart", placeholder="f.eks. Q3 2027")
        beskrivelse = st.text_area("Beskrivelse", placeholder="Kort beskrivelse...", height=80)
        url         = st.text_input("Nettside (URL)", placeholder="https://ferdeiendom.no/bolig/...")

        submitted = st.form_submit_button("Opprett prosjekt", type="primary", use_container_width=True)

    if submitted:
        errors = []
        if not name.strip(): errors.append("Prosjektnavn er påkrevd.")
        if not sted.strip(): errors.append("Sted er påkrevd.")
        if errors:
            for e in errors:
                st.error(e)
        else:
            new_id = max((p["id"] for p in st.session_state.projects), default=0) + 1
            st.session_state.projects.append({
                "id": new_id, "name": name.strip(), "sted": sted.strip(),
                "status": status, "type": ptype,
                "boliger": int(boliger) if boliger > 0 else None,
                "bra": bra.strip() or None,
                "budsjett": int(budsjett), "paalopte": int(paalopte),
                "fremdrift": int(fremdrift),
                "salgsstart": salgsstart.strip() or None,
                "beskrivelse": beskrivelse.strip() or None,
                "url": url.strip() or None, "img": None,
            })
            st.rerun()


# ── Header ────────────────────────────────────────────────────────────────────
h1, h2 = st.columns([6, 1])
with h1:
    st.markdown(
        '<p style="font-size:18px;font-weight:700;letter-spacing:0.18em;margin:0">'
        '<span style="color:#9B3520">FERD</span> EIENDOM</p>'
        '<p style="font-size:9px;letter-spacing:0.22em;color:#9ca3af;margin:0">PROSJEKTPORTAL — INTERN</p>',
        unsafe_allow_html=True,
    )
with h2:
    if st.button("＋ Nytt prosjekt", type="primary", use_container_width=True):
        new_project_dialog()

st.markdown('<hr style="border:none;border-top:1px solid #e5e7eb;margin:8px 0 20px 0">', unsafe_allow_html=True)


# ── KPI bar ───────────────────────────────────────────────────────────────────
projects      = st.session_state.projects
total_budget  = sum(p["budsjett"] for p in projects)
total_boliger = sum(p["boliger"] or 0 for p in projects)
n_active      = sum(1 for p in projects if p["status"] != "Ferdigstilt")
n_done        = sum(1 for p in projects if p["status"] == "Ferdigstilt")
budget_label  = f"{total_budget/1000:.1f} mrd NOK" if total_budget >= 1000 else f"{total_budget} MNOK"

k1, k2, k3, k4 = st.columns(4)
k1.metric("Prosjekter totalt", len(projects), f"{n_active} aktive")
k2.metric("Boliger planlagt", f"{total_boliger}+" if total_boliger else "—")
k3.metric("Totalbudsjett", budget_label)
k4.metric("Ferdigstilt", n_done)

st.markdown("<div style='height:12px'></div>", unsafe_allow_html=True)


# ── Filters ───────────────────────────────────────────────────────────────────
f1, f2, f3 = st.columns([3, 2, 2])
search        = f1.text_input("Søk", placeholder="Søk på navn, sted eller type…", label_visibility="collapsed")
status_filter = f2.selectbox("Status", ["Alle statuser", "Under utvikling", "Til salgs", "Ferdigstilt"], label_visibility="collapsed")
sort_by       = f3.selectbox("Sorter", ["Navn (A–Å)", "Fremdrift (høy–lav)", "Budsjett (høy–lav)"], label_visibility="collapsed")


# ── Filter + sort ─────────────────────────────────────────────────────────────
filtered = list(projects)

if search.strip():
    q = search.strip().lower()
    filtered = [p for p in filtered if q in p["name"].lower() or q in p["sted"].lower() or q in p["type"].lower()]

if status_filter != "Alle statuser":
    filtered = [p for p in filtered if p["status"] == status_filter]

if sort_by == "Fremdrift (høy–lav)":
    filtered.sort(key=lambda p: p["fremdrift"], reverse=True)
elif sort_by == "Budsjett (høy–lav)":
    filtered.sort(key=lambda p: p["budsjett"], reverse=True)
else:
    filtered.sort(key=lambda p: p["name"])

st.caption(f"{len(filtered)} av {len(projects)} prosjekter")
st.markdown("<div style='height:4px'></div>", unsafe_allow_html=True)


# ── Project grid ──────────────────────────────────────────────────────────────
COLS = 3

if not filtered:
    st.info("Ingen prosjekter funnet. Juster filteret eller opprett et nytt prosjekt.")
else:
    rows = [filtered[i:i + COLS] for i in range(0, len(filtered), COLS)]
    for row in rows:
        cols = st.columns(COLS)
        for col, project in zip(cols, row):
            with col:
                render_project_card(project)


# ── Footer ────────────────────────────────────────────────────────────────────
st.markdown(
    '<div style="text-align:center;font-size:10px;letter-spacing:0.18em;color:#d1d5db;padding:32px 0 8px">'
    '<span style="color:#9B3520">FERD</span> EIENDOM — PROSJEKTPORTAL — INTERN BRUK</div>',
    unsafe_allow_html=True,
)
