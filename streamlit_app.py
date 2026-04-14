import streamlit as st

# ── Page config ───────────────────────────────────────────────────────────────
st.set_page_config(
    page_title="Ferd Eiendom — Prosjektportal",
    page_icon="🏗️",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# ── Data ──────────────────────────────────────────────────────────────────────
INITIAL_PROJECTS = [
    {
        "id": 1, "name": "Humlehagen", "sted": "Ensjø, Oslo",
        "status": "Ferdigstilt", "type": "Leiligheter og rekkehus",
        "boliger": 142, "bra": "36–135 m²",
        "img": "https://ferdeiendom.no/wp-content/uploads/2024/07/fotograf-Knut-Neerland_B_11670-1024x768.jpg",
        "url": "https://ferdeiendom.no/bolig/humlehagen/",
        "fremdrift": 100, "budsjett": 480, "paalopte": 480, "salgsstart": None,
    },
    {
        "id": 2, "name": "Bråtejordet", "sted": "Strømmen",
        "status": "Ferdigstilt", "type": "Rekkehus og leiligheter",
        "boliger": None, "bra": None,
        "img": "https://ferdeiendom.no/wp-content/uploads/2022/09/Bratejordet-1024x579.jpg",
        "url": "https://ferdeiendom.no/bolig/bratejordet/",
        "fremdrift": 100, "budsjett": 320, "paalopte": 320, "salgsstart": None,
    },
    {
        "id": 3, "name": "Kleven Gård", "sted": "Bekkestua, Bærum",
        "status": "Under utvikling", "type": "Leiligheter",
        "boliger": None, "bra": None,
        "img": "https://ferdeiendom.no/wp-content/uploads/2022/09/Kleven-Gard_Eksterior_Vinkel-02_Hus_1-5_6-9_10-14_15-19_v6_3mb_3destate.no_-1024x512.jpg",
        "url": "https://ferdeiendom.no/bolig/kleven-gard/",
        "fremdrift": 35, "budsjett": 290, "paalopte": 102, "salgsstart": None,
    },
    {
        "id": 4, "name": "Kobberkvartalet", "sted": "Vestre Billingstad",
        "status": "Under utvikling", "type": "Leiligheter",
        "boliger": None, "bra": None,
        "img": "https://ferdeiendom.no/wp-content/uploads/2025/02/KOBBER3-1024x576.jpg",
        "url": "https://ferdeiendom.no/bolig/vestre-billigstad/",
        "fremdrift": 20, "budsjett": 450, "paalopte": 90, "salgsstart": None,
    },
    {
        "id": 5, "name": "Sander kvartal", "sted": "Ski sentrum",
        "status": "Til salgs", "type": "Leiligheter og næring",
        "boliger": 210, "bra": "30–128 m²",
        "img": "https://ferdeiendom.no/wp-content/uploads/2022/07/Sander-kvartal-nettside-1534-x-1022-px-1-e1772438107438-1024x570.jpg",
        "url": "https://ferdeiendom.no/bolig/sander-kvartal/",
        "fremdrift": 15, "budsjett": 620, "paalopte": 93, "salgsstart": "15. apr 2026",
    },
    {
        "id": 6, "name": "Skolekvartalet", "sted": "Ski",
        "status": "Under utvikling", "type": "Leiligheter og rekkehus",
        "boliger": 228, "bra": "21 500 m²",
        "img": "https://ferdeiendom.no/wp-content/uploads/2022/07/Skolekvartalet-nettside-1534-x-1022-px-2-1024x682.png",
        "url": "https://ferdeiendom.no/bolig/skolekvartalet/",
        "fremdrift": 25, "budsjett": 520, "paalopte": 130, "salgsstart": None,
    },
    {
        "id": 7, "name": "Høyda", "sted": "Moss",
        "status": "Under utvikling", "type": "Rekkehus og leiligheter",
        "boliger": 800, "bra": "75 000 m²",
        "img": "https://ferdeiendom.no/wp-content/uploads/2022/09/hoyda_4-1024x819.jpg",
        "url": "https://ferdeiendom.no/bolig/hoyda-2/",
        "fremdrift": 10, "budsjett": 2800, "paalopte": 280, "salgsstart": None,
    },
    {
        "id": 8, "name": "Marienlyst", "sted": "Oslo",
        "status": "Under utvikling", "type": "Kultur og bolig",
        "boliger": None, "bra": None,
        "img": "https://ferdeiendom.no/wp-content/uploads/2026/01/Marienlyst-nettside-1536x864.jpg-1024x576.webp",
        "url": "https://ferdeiendom.no/bolig/marienlyst/",
        "fremdrift": 5, "budsjett": 3500, "paalopte": 175, "salgsstart": None,
    },
    {
        "id": 9, "name": "Hamangskogen", "sted": "Sandvika, Bærum",
        "status": "Under utvikling", "type": "Leiligheter og næring",
        "boliger": None, "bra": "12 000 m²",
        "img": "https://ferdeiendom.no/wp-content/uploads/2022/10/Hamangskogen-1024x522.jpg",
        "url": "https://ferdeiendom.no/bolig/hamangskogen-10/",
        "fremdrift": 5, "budsjett": 380, "paalopte": 19, "salgsstart": "2030",
    },
    {
        "id": 10, "name": "Markalléen", "sted": "Høvik, Bærum",
        "status": "Under utvikling", "type": "Leiligheter",
        "boliger": None, "bra": "17 000 m²",
        "img": "https://ferdeiendom.no/wp-content/uploads/2022/09/Kleven-Gård-0059-skjerm-1024x682.jpg",
        "url": "https://ferdeiendom.no/bolig/markalleen/",
        "fremdrift": 3, "budsjett": 540, "paalopte": 16, "salgsstart": "2030",
    },
]

STATUS_OPTIONS  = ["Under utvikling", "Til salgs", "Ferdigstilt", "Regulering", "Konsept"]
TYPE_OPTIONS    = [
    "Leiligheter", "Rekkehus", "Leiligheter og rekkehus",
    "Rekkehus og leiligheter", "Leiligheter og næring",
    "Kultur og bolig", "Eneboliger", "Næring",
]

# ── Session state ─────────────────────────────────────────────────────────────
if "projects" not in st.session_state:
    st.session_state.projects = list(INITIAL_PROJECTS)

# ── CSS ───────────────────────────────────────────────────────────────────────
st.markdown("""
<style>
  /* Page background */
  .stApp { background: #f7f5f0; }

  /* Hide default Streamlit top padding and footer */
  #MainMenu, footer { visibility: hidden; }
  .block-container { padding-top: 0 !important; max-width: 1400px; }

  /* Header bar */
  .ferd-header {
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 14px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: -1rem -1rem 0 -1rem;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  .ferd-logo-main { font-size: 14px; font-weight: 600; letter-spacing: 0.18em; line-height: 1; }
  .ferd-logo-main span.red { color: #9B3520; }
  .ferd-logo-sub { font-size: 9px; letter-spacing: 0.22em; color: #9ca3af; margin-top: 4px; text-transform: uppercase; }

  /* KPI cards */
  .kpi-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 16px 20px;
  }
  .kpi-label { font-size: 10px; font-weight: 600; letter-spacing: 0.12em; color: #9ca3af; text-transform: uppercase; margin-bottom: 6px; }
  .kpi-value { font-size: 26px; font-weight: 600; color: #1a1a1a; line-height: 1; }
  .kpi-sub   { font-size: 11px; color: #9ca3af; margin-top: 4px; }

  /* Status badge */
  .badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 999px;
    line-height: 1;
  }

  /* Project cards */
  .proj-card {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
    transition: box-shadow 0.2s, border-color 0.2s;
    height: 100%;
  }
  .proj-card:hover { border-color: #9B3520; box-shadow: 0 4px 20px rgba(0,0,0,0.08); }
  .proj-img { width: 100%; height: 150px; object-fit: cover; display: block; }
  .proj-img-placeholder {
    width: 100%; height: 150px; background: #f7f5f0;
    display: flex; align-items: center; justify-content: center;
    font-size: 36px;
  }
  .proj-body { padding: 14px 16px; }
  .proj-name { font-weight: 600; font-size: 14px; color: #1a1a1a; }
  .proj-sted { font-size: 12px; color: #9ca3af; margin-top: 3px; }
  .proj-type { font-size: 12px; color: #6b7280; margin-top: 6px; }
  .proj-meta { font-size: 11px; color: #9ca3af; margin-top: 4px; }
  .proj-divider { border-top: 1px solid #f3f4f6; margin: 10px 0; }
  .prog-label { display: flex; justify-content: space-between; font-size: 11px; color: #9ca3af; margin-bottom: 4px; }
  .prog-track { height: 4px; background: #f3f4f6; border-radius: 999px; overflow: hidden; }
  .prog-fill  { height: 100%; border-radius: 999px; }
  .prog-budget { display: flex; justify-content: space-between; font-size: 11px; color: #9ca3af; margin-top: 6px; }

  /* Filter row */
  div[data-testid="stHorizontalBlock"] .stTextInput input {
    border-radius: 8px !important;
    border: 1px solid #e5e7eb !important;
    font-size: 13px !important;
  }
  div[data-testid="stHorizontalBlock"] .stSelectbox select {
    border-radius: 8px !important;
    font-size: 13px !important;
  }

  /* Primary button override */
  .stButton > button[kind="primary"] {
    background: #9B3520 !important;
    border: none !important;
    color: white !important;
    border-radius: 8px !important;
    font-weight: 500 !important;
    padding: 8px 20px !important;
  }
  .stButton > button[kind="primary"]:hover {
    background: #7a2918 !important;
  }

  /* Dialog form */
  .stDialog [data-testid="stForm"] { gap: 8px; }

  /* Footer */
  .ferd-footer {
    text-align: center;
    font-size: 10px;
    letter-spacing: 0.18em;
    color: #d1d5db;
    padding: 32px 0 16px 0;
    text-transform: uppercase;
  }
  .ferd-footer span { color: #9B3520; }
</style>
""", unsafe_allow_html=True)


# ── Helpers ───────────────────────────────────────────────────────────────────
STATUS_STYLE = {
    "Ferdigstilt":     {"bg": "#EAF3DE", "color": "#3B6D11"},
    "Til salgs":       {"bg": "#FAEEDA", "color": "#854F0B"},
    "Under utvikling": {"bg": "#E6F1FB", "color": "#185FA5"},
    "Regulering":      {"bg": "#f3f2ee", "color": "#555"},
    "Konsept":         {"bg": "#f3f2ee", "color": "#555"},
}

def progress_color(p):
    if p == 100: return "#3B6D11"
    if p >= 25:  return "#185FA5"
    if p >= 10:  return "#854F0B"
    return "#aaa"

def kpi_html(label, value, sub="", color="#1a1a1a"):
    return f"""
    <div class="kpi-card">
      <div class="kpi-label">{label}</div>
      <div class="kpi-value" style="color:{color}">{value}</div>
      {"<div class='kpi-sub'>" + sub + "</div>" if sub else ""}
    </div>
    """

def badge_html(status):
    s = STATUS_STYLE.get(status, STATUS_STYLE["Regulering"])
    return f'<span class="badge" style="background:{s["bg"]};color:{s["color"]}">{status}</span>'

def project_card_html(p):
    img = (
        f'<img class="proj-img" src="{p["img"]}" alt="{p["name"]}" '
        f'onerror="this.parentElement.innerHTML=\'<div class=proj-img-placeholder>🏗️</div>\'">'
        if p.get("img") else
        '<div class="proj-img-placeholder">🏗️</div>'
    )
    meta = (
        f'{p["boliger"]} boliger' if p.get("boliger")
        else (p.get("bra") or p["type"])
    )
    pc = progress_color(p["fremdrift"])
    badge = badge_html(p["status"])
    salgsstart = (
        f'<div style="font-size:11px;color:#854F0B;margin-top:4px;">Salgsstart: {p["salgsstart"]}</div>'
        if p.get("salgsstart") else ""
    )
    card_inner = f"""
      <div class="proj-card">
        <div style="position:relative">
          {img}
          <div style="position:absolute;top:8px;left:8px">{badge}</div>
        </div>
        <div class="proj-body">
          <div class="proj-name">{p["name"]}</div>
          <div class="proj-sted">📍 {p["sted"]}</div>
          <div class="proj-type">{p["type"]}</div>
          <div class="proj-meta">{meta}</div>
          {salgsstart}
          <div class="proj-divider"></div>
          <div class="prog-label"><span>Fremdrift</span><strong style="color:#374151">{p["fremdrift"]}%</strong></div>
          <div class="prog-track"><div class="prog-fill" style="width:{p['fremdrift']}%;background:{pc}"></div></div>
          <div class="prog-budget"><span>{p["paalopte"]} MNOK påløpt</span><span>{p["budsjett"]} MNOK totalt</span></div>
        </div>
      </div>
    """
    if p.get("url"):
        return f'<a href="{p["url"]}" target="_blank" style="text-decoration:none;display:block;height:100%">{card_inner}</a>'
    return card_inner


# ── New project dialog ────────────────────────────────────────────────────────
@st.dialog("Nytt prosjekt", width="large")
def new_project_dialog():
    with st.form("new_project_form", border=False):
        c1, c2 = st.columns(2)
        name  = c1.text_input("Prosjektnavn *", placeholder="f.eks. Strandparken")
        sted  = c2.text_input("Sted *",         placeholder="f.eks. Lysaker, Bærum")

        c3, c4 = st.columns(2)
        status = c3.selectbox("Status",     STATUS_OPTIONS)
        ptype  = c4.selectbox("Boligtype",  TYPE_OPTIONS)

        c5, c6 = st.columns(2)
        boliger = c5.number_input("Antall boliger", min_value=0, value=0, step=1)
        bra     = c6.text_input("BRA", placeholder="f.eks. 12 500 m²")

        c7, c8 = st.columns(2)
        budsjett = c7.number_input("Budsjett (MNOK) *",      min_value=1,  value=100, step=10)
        paalopte = c8.number_input("Påløpt kostnad (MNOK)",  min_value=0,  value=0,   step=10)

        fremdrift  = st.slider("Fremdrift (%)", 0, 100, 0)
        salgsstart = st.text_input("Salgsstart", placeholder="f.eks. Q3 2027 eller 15. mai 2027")
        beskrivelse = st.text_area("Beskrivelse", placeholder="Kort beskrivelse av prosjektet...", height=80)
        url = st.text_input("Nettside (URL)", placeholder="https://ferdeiendom.no/bolig/...")

        submitted = st.form_submit_button("Opprett prosjekt", type="primary", use_container_width=True)

    if submitted:
        errors = []
        if not name.strip():    errors.append("Prosjektnavn er påkrevd.")
        if not sted.strip():    errors.append("Sted er påkrevd.")

        if errors:
            for e in errors:
                st.error(e)
        else:
            new_id = max((p["id"] for p in st.session_state.projects), default=0) + 1
            st.session_state.projects.append({
                "id":          new_id,
                "name":        name.strip(),
                "sted":        sted.strip(),
                "status":      status,
                "type":        ptype,
                "boliger":     int(boliger) if boliger > 0 else None,
                "bra":         bra.strip() or None,
                "budsjett":    int(budsjett),
                "paalopte":    int(paalopte),
                "fremdrift":   int(fremdrift),
                "salgsstart":  salgsstart.strip() or None,
                "beskrivelse": beskrivelse.strip() or None,
                "url":         url.strip() or None,
                "img":         None,
            })
            st.rerun()


# ── Header ────────────────────────────────────────────────────────────────────
header_left, header_right = st.columns([6, 1])
with header_left:
    st.markdown("""
    <div style="padding:16px 0 8px 0">
      <div class="ferd-logo-main"><span class="red">FERD</span> EIENDOM</div>
      <div class="ferd-logo-sub">Prosjektportal — Intern</div>
    </div>
    """, unsafe_allow_html=True)
with header_right:
    st.markdown("<div style='padding-top:14px'>", unsafe_allow_html=True)
    if st.button("＋ Nytt prosjekt", type="primary", use_container_width=True):
        new_project_dialog()
    st.markdown("</div>", unsafe_allow_html=True)

st.markdown("<hr style='border:none;border-top:1px solid #e5e7eb;margin:0 0 24px 0'>", unsafe_allow_html=True)


# ── KPI bar ───────────────────────────────────────────────────────────────────
projects = st.session_state.projects
total_budget  = sum(p["budsjett"] for p in projects)
total_boliger = sum(p["boliger"] or 0 for p in projects)
n_done        = sum(1 for p in projects if p["status"] == "Ferdigstilt")
budget_label  = (
    f"{total_budget/1000:,.1f} mrd".replace(",", " ")
    if total_budget >= 1000 else f"{total_budget} MNOK"
)
boliger_label = f"{total_boliger:,}+".replace(",", " ") if total_boliger > 0 else "—"

k1, k2, k3, k4 = st.columns(4)
k1.markdown(kpi_html("Prosjekter",       str(len(projects)),   f"{sum(1 for p in projects if p['status'] != 'Ferdigstilt')} aktive"), unsafe_allow_html=True)
k2.markdown(kpi_html("Boliger planlagt", boliger_label,        "under utvikling"), unsafe_allow_html=True)
k3.markdown(kpi_html("Totalbudsjett",    budget_label,         "NOK estimert"), unsafe_allow_html=True)
k4.markdown(kpi_html("Ferdigstilt",      str(n_done),          "prosjekter", color="#3B6D11"), unsafe_allow_html=True)

st.markdown("<div style='height:20px'></div>", unsafe_allow_html=True)


# ── Filters ───────────────────────────────────────────────────────────────────
f1, f2, f3, f4 = st.columns([3, 2, 2, 1])

search = f1.text_input(
    "Søk", placeholder="Søk på navn, sted eller type…",
    label_visibility="collapsed",
)
status_filter = f2.selectbox(
    "Status", ["Alle statuser", "Under utvikling", "Til salgs", "Ferdigstilt"],
    label_visibility="collapsed",
)
sort_by = f3.selectbox(
    "Sorter", ["Navn (A–Å)", "Fremdrift (høy–lav)", "Budsjett (høy–lav)"],
    label_visibility="collapsed",
)
f4.markdown(f"<div style='padding-top:8px;font-size:12px;color:#9ca3af;text-align:right'>{len(projects)} prosjekter</div>", unsafe_allow_html=True)


# ── Filter + sort logic ───────────────────────────────────────────────────────
filtered = list(projects)

if search.strip():
    q = search.strip().lower()
    filtered = [p for p in filtered if
                q in p["name"].lower() or
                q in p["sted"].lower() or
                q in p["type"].lower()]

if status_filter != "Alle statuser":
    filtered = [p for p in filtered if p["status"] == status_filter]

if sort_by == "Fremdrift (høy–lav)":
    filtered.sort(key=lambda p: p["fremdrift"], reverse=True)
elif sort_by == "Budsjett (høy–lav)":
    filtered.sort(key=lambda p: p["budsjett"], reverse=True)
else:
    filtered.sort(key=lambda p: p["name"])

st.markdown("<div style='height:8px'></div>", unsafe_allow_html=True)


# ── Project grid ──────────────────────────────────────────────────────────────
COLS = 3

if not filtered:
    st.markdown("""
    <div style="text-align:center;padding:60px 0">
      <div style="font-size:40px;margin-bottom:12px">🏗️</div>
      <p style="font-weight:600;color:#374151">Ingen prosjekter funnet</p>
      <p style="font-size:13px;color:#9ca3af">Juster filteret eller opprett et nytt prosjekt</p>
    </div>
    """, unsafe_allow_html=True)
else:
    rows = [filtered[i:i+COLS] for i in range(0, len(filtered), COLS)]
    for row in rows:
        cols = st.columns(COLS)
        for col, project in zip(cols, row):
            with col:
                st.markdown(project_card_html(project), unsafe_allow_html=True)
        st.markdown("<div style='height:16px'></div>", unsafe_allow_html=True)


# ── Footer ────────────────────────────────────────────────────────────────────
st.markdown("""
<div class="ferd-footer"><span>FERD</span> EIENDOM — PROSJEKTPORTAL — INTERN BRUK</div>
""", unsafe_allow_html=True)
