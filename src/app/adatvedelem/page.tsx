export default function AdatvedelemPage() {
  const missingItems = [
    "Adatkezelési tájékoztató (GDPR) – Pótlás alatt",
    "Adatfeldolgozói szerződések listája – Pótlás alatt",
    "Adatvédelmi tisztviselő elérhetősége – Pótlás alatt"
  ]

  return (
    <div className="min-h-screen bg-white">
      <section className="py-16">
        <div className="container max-w-4xl space-y-8">
          <h1 className="text-4xl font-bold text-[#1A4D6B]">Adatkezelési tájékoztató</h1>
          <p className="text-lg text-[#334155]">
            Az adatkezelési tájékoztató közzététele folyamatban. Amint a hivatalos, hitelesített dokumentum rendelkezésre áll, itt publikáljuk.
          </p>
          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 space-y-3">
            <h2 className="text-xl font-semibold text-yellow-800">Hiányzó elemek</h2>
            <ul className="list-disc list-inside space-y-1 text-yellow-900">
              {missingItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-[#475569]">
            Hatályos jogszabályok: GDPR (2016/679/EU), Infotv. 2011. évi CXII. törvény. A közzététel ezeknek megfelelően történik.
          </p>
        </div>
      </section>
    </div>
  )
}
