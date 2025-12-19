"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, FileText, Calendar, Waves, Building, Users, Home } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function SiteFooter() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-br from-[#1A4D6B] to-[#2D7C6E] text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-3xl text-white/95 font-bold mb-6">{t('footer.about')}</h3>
            <p className="text-xl text-white/90 leading-relaxed mb-6">
              {t('footer.about.text')}
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-3xl text-white/95 font-bold mb-6">{t('nav.home')}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/bemutatkozas" className="flex items-center gap-3 text-xl text-white/90 hover:text-white transition-colors no-underline">
                  <Users className="w-6 h-6" />
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/hirek" className="flex items-center gap-3 text-xl text-white/90 hover:text-white transition-colors no-underline">
                  <Calendar className="w-6 h-6" />
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link href="/dokumentumok" className="flex items-center gap-3 text-xl text-white/90 hover:text-white transition-colors no-underline">
                  <FileText className="w-6 h-6" />
                  {t('nav.documents')}
                </Link>
              </li>
              <li>
                <Link href="/turizmus" className="flex items-center gap-3 text-xl text-white/90 hover:text-white transition-colors no-underline">
                  <Waves className="w-6 h-6" />
                  {t('nav.tourism')}
                </Link>
              </li>
              <li>
                <Link href="/szolgaltatasok" className="flex items-center gap-3 text-xl text-white/90 hover:text-white transition-colors no-underline">
                  <Building className="w-6 h-6" />
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link href="/kapcsolat" className="flex items-center gap-3 text-xl text-white/90 hover:text-white transition-colors no-underline">
                  <Home className="w-6 h-6" />
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-3xl text-white/95 font-bold mb-6">{t('contact.title')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xl text-white/90">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <span>2483 Gárdony<br />Szabadság út 20-22</span>
              </li>
              <li className="flex items-center gap-3 text-xl text-white/90">
                <Phone className="w-6 h-6 flex-shrink-0" />
                <span>+36 22 355 370</span>
              </li>
              <li className="flex items-center gap-3 text-xl text-white/90">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <span>onkormanyzat@gardony.hu</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-3xl text-white/95 font-bold mb-6">{t('footer.office.hours')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-6 text-xl text-white/90">
                <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white/90">{t('footer.office.monday')}</p>
                  <p className="font-medium text-white/90">{t('footer.office.wednesday')}</p>
                  <p className="font-medium text-white/90">{t('footer.office.friday')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xl text-white/80">
              {t('footer.copyright')}
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/adatvedelem" className="text-xl text-white/80 hover:text-white transition-colors no-underline">
                {t('footer.privacy')}
              </Link>
              <Link href="/cookie-tajekoztato" className="text-xl text-white/80 hover:text-white transition-colors no-underline">
                Cookie tájékoztató
              </Link>
              <Link href="/impresszum" className="text-xl text-white/80 hover:text-white transition-colors no-underline">
                {t('footer.imprint')}
              </Link>
              <Link href="/panaszkezeles" className="text-xl text-white/80 hover:text-white transition-colors no-underline">
                Panaszkezelés
              </Link>
              <Link href="/suga" className="text-xl text-white/80 hover:text-white transition-colors no-underline">
                {t('footer.help')}
              </Link>
              <Link href="/akadalymentesites" className="text-xl text-white/80 hover:text-white transition-colors no-underline">
                {t('footer.accessibility')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}