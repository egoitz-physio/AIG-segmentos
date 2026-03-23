import { motion } from 'framer-motion';
import { useState } from 'react';

interface KinesiologiaTabProps {
	isDark: boolean;
	clientName?: string;
}

export default function KinesiologiaTab({
	isDark: _isDark,
	clientName = 'Medicus',
}: KinesiologiaTabProps) {
	const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

	const phases = [
		{
			num: '01',
			label: 'FASE 1',
			months: 'Meses 1–3',
			title: 'Lanzamiento y validación',
			items: [
				'Selección de 15–20 kinesiólogos prestadores de la red',
				'Capacitación en FisifyStudio y onboarding del equipo',
				'Incorporación de los primeros afiliados al programa',
				'Recolección de primeras métricas de activación y uso',
				`Adaptación FisifyPro a los requerimientos de los kinesiólogos de ${clientName}`,
			],
		},
		{
			num: '02',
			label: 'FASE 2',
			months: 'Meses 4–8',
			title: 'Optimización y expansión',
			items: [
				'Ajuste del programa en base a datos de adherencia',
				`Revisiones quincenales de KPIs con el equipo ${clientName}`,
				'Seguimiento mensual y visita presencial a los centros',
				'Diseño conjunto del plan 2027',
			],
		},
		{
			num: '03',
			label: 'FASE 3',
			months: 'Meses 9–12',
			title: 'Consolidación y escalado',
			items: [
				'Evaluación de resultados clínicos y económicos',
				'Definición del modelo de escalado para toda la red',
				`Informe ejecutivo final para ${clientName}`,
				'Propuesta de renovación y expansión a nuevas especialidades',
			],
		},
	];

	const kpis = [
		{
			num: '01',
			title: 'Eficiencia económica',
			description:
				'Comparativa de coste por sesión entre el modelo presencial tradicional y el modelo híbrido, con el objetivo de reducir el coste medio de atención kinesiológica en al menos un 20% al cierre del piloto.',
		},
		{
			num: '02',
			title: 'Activación y adherencia',
			description:
				'Tasa de activación de afiliados invitados, sesiones digitales promedio por afiliado y porcentaje de retención, con el objetivo de alcanzar una activación superior al 80% y una retención superior al 70% en semana 10.',
		},
		{
			num: '03',
			title: 'Satisfacción clínica',
			description:
				'NPS del afiliado con el modelo híbrido y satisfacción del kinesiólogo prestador con la herramienta, con el objetivo de mantener una satisfacción del afiliado igual o superior a 9/10.',
		},
		{
			num: '04',
			title: 'Cobertura geográfica',
			description:
				'Número de afiliados atendidos en zonas de difícil acceso o baja densidad prestacional, con el objetivo de que al menos el 15% del total de afiliados del piloto provenga de áreas con cobertura presencial limitada.',
		},
	];

	return (
		<div className='bg-[#faf9f7] min-h-screen relative'>
			{/* Subtle grid lines background */}
			<div className='absolute inset-0 pointer-events-none'>
				<div className='max-w-[1400px] mx-auto h-full px-6 lg:px-12 flex'>
					{[...Array(5)].map((_, i) => (
						<div
							key={i}
							className='flex-1 border-l border-[#0a1628]/[0.03] first:border-l-0'
						/>
					))}
					<div className='flex-1 border-l border-r border-[#0a1628]/[0.03]' />
				</div>
			</div>

			<div className='max-w-[1400px] mx-auto px-6 lg:px-12 py-24 relative'>
				{/* ══════════════════════════════════════ */}
				{/*  HEADER                                */}
				{/* ══════════════════════════════════════ */}
				<motion.div
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='mb-24'
				>
					<div className='flex items-center gap-4 mb-8'>
						<span className='text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/40 font-medium'>
							Kinesiología híbrida
						</span>
						<div className='flex-1 border-t border-[#0a1628]/[0.08]' />
					</div>

					<h2
						className='text-4xl md:text-5xl lg:text-[3.5rem] font-light text-[#0a1628] tracking-tight leading-[1.1] max-w-4xl'
						style={{ fontFamily: 'Outfit, sans-serif' }}
					>
						Piloto estructurado
						<br />
						<span className='font-semibold'>a 12 meses</span>
					</h2>

					<p className='text-[17px] text-[#0a1628]/70 font-light mt-8 max-w-3xl leading-[1.8]'>
						La evidencia del piloto realizado en 2025 demuestra que el modelo
						híbrido mejora el acceso al tratamiento, eleva la adherencia y
						genera una mayor satisfacción del afiliado. Identificamos que la
						adopción profesional requiere un periodo de adaptación y acciones
						específicas de integración y acompañamiento. Para ello, proponemos
						un piloto estructurado a 12 meses que abarque la rehabilitación
						kinesiológica integrando la red prestacional de {clientName} con la
						tecnología digital de Fisify.
					</p>
				</motion.div>

				{/* ══════════════════════════════════════ */}
				{/*  01 — EL MODELO HÍBRIDO                */}
				{/* ══════════════════════════════════════ */}
				<section className='mb-32'>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className='flex items-center gap-4 mb-12'>
							<span className='text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/40 font-medium'>
								01
							</span>
							<div className='flex-1 border-t border-[#0a1628]/[0.08]' />
						</div>

						<h3
							className='text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-6'
							style={{ fontFamily: 'Outfit, sans-serif' }}
						>
							El modelo híbrido:
							<br />
							<span className='font-semibold'>cómo funciona</span>
						</h3>

						<p className='text-[17px] text-[#0a1628]/70 font-light leading-[1.8] max-w-3xl mb-16'>
							El modelo híbrido combina la atención presencial del kinesiólogo
							de la red {clientName} con el seguimiento digital continuo a través de
							la plataforma Fisify. El afiliado recibe lo mejor de ambos mundos:
							el vínculo clínico con su profesional y la accesibilidad de una
							herramienta digital disponible 24/7.
						</p>

						{/* Three columns */}
						<div className='grid md:grid-cols-3 gap-0'>
							{/* Atención presencial */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0 }}
								viewport={{ once: true }}
								className='py-10 px-8 lg:px-10 border-b md:border-b-0 border-[#0a1628]/[0.08]'
							>
								<div className='flex items-center gap-3 mb-6'>
									<span className='w-10 h-10 flex items-center justify-center bg-[#1a3a6e]/10 rounded-lg'>
										<span className='text-[11px] font-bold text-[#1a3a6e] tracking-wide'>
											A
										</span>
									</span>
									<h4
										className='text-lg font-semibold text-[#0a1628] tracking-tight'
										style={{ fontFamily: 'Outfit, sans-serif' }}
									>
										Atención presencial
									</h4>
								</div>
								<span className='text-[11px] uppercase tracking-[0.15em] text-[#1a3a6e] font-semibold block mb-5'>
									Kinesiólogo prestador
								</span>
								<div className='space-y-4'>
									{[
										'Consulta inicial y valoración funcional',
										'Definición de objetivos y plan de tratamiento según frecuencia clínica',
										'Ajuste del programa según evolución',
									].map((item, i) => (
										<div key={i} className='flex items-start gap-3'>
											<span className='w-1.5 h-1.5 rounded-full bg-[#1a3a6e] mt-2 flex-shrink-0' />
											<span className='text-[15px] text-[#0a1628]/75 font-light leading-relaxed'>
												{item}
											</span>
										</div>
									))}
								</div>
							</motion.div>

							{/* Plataforma digital */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.1 }}
								viewport={{ once: true }}
								className='py-10 px-8 lg:px-10 md:border-l border-b md:border-b-0 border-[#0a1628]/[0.08]'
							>
								<div className='flex items-center gap-3 mb-6'>
									<span className='w-10 h-10 flex items-center justify-center bg-[#1a3a6e]/10 rounded-lg'>
										<span className='text-[11px] font-bold text-[#1a3a6e] tracking-wide'>
											B
										</span>
									</span>
									<h4
										className='text-lg font-semibold text-[#0a1628] tracking-tight'
										style={{ fontFamily: 'Outfit, sans-serif' }}
									>
										Plataforma digital Fisify
									</h4>
								</div>
								<span className='text-[11px] uppercase tracking-[0.15em] text-[#1a3a6e] font-semibold block mb-5'>
									App del afiliado
								</span>
								<div className='space-y-4'>
									{[
										'Programa de ejercicios personalizado disponible 24/7',
										'Seguimiento con visión artificial en tiempo real',
										'Chat directo con el kinesiólogo asignado',
										'Registro de adherencia y progreso',
									].map((item, i) => (
										<div key={i} className='flex items-start gap-3'>
											<span className='w-1.5 h-1.5 rounded-full bg-[#1a3a6e] mt-2 flex-shrink-0' />
											<span className='text-[15px] text-[#0a1628]/75 font-light leading-relaxed'>
												{item}
											</span>
										</div>
									))}
								</div>
							</motion.div>

							{/* Gestión y reportes */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								viewport={{ once: true }}
								className='py-10 px-8 lg:px-10 md:border-l border-[#0a1628]/[0.08]'
							>
								<div className='flex items-center gap-3 mb-6'>
									<span className='w-10 h-10 flex items-center justify-center bg-[#1a3a6e]/10 rounded-lg'>
										<span className='text-[11px] font-bold text-[#1a3a6e] tracking-wide'>
											C
										</span>
									</span>
									<h4
										className='text-lg font-semibold text-[#0a1628] tracking-tight'
										style={{ fontFamily: 'Outfit, sans-serif' }}
									>
										Gestión y reportes
									</h4>
								</div>
								<span className='text-[11px] uppercase tracking-[0.15em] text-[#1a3a6e] font-semibold block mb-5'>
									Dashboard {clientName}
								</span>
								<div className='space-y-4'>
									{[
										'Informes de uso y adherencia por cohorte',
										'Satisfacción del afiliado y NPS',
										'Zonas de dolor y tipología de lesiones',
										'Comparativa coste presencial vs. híbrido',
									].map((item, i) => (
										<div key={i} className='flex items-start gap-3'>
											<span className='w-1.5 h-1.5 rounded-full bg-[#1a3a6e] mt-2 flex-shrink-0' />
											<span className='text-[15px] text-[#0a1628]/75 font-light leading-relaxed'>
												{item}
											</span>
										</div>
									))}
								</div>
							</motion.div>
						</div>

						{/* Screenshot 1 — Gestión de pacientes (inside bg-gradient-4) */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='mt-20 rounded-2xl overflow-hidden relative'
						>
							<img
								src='/images/bg-gradient-4.png'
								alt=''
								className='absolute inset-0 w-full h-full object-cover'
							/>
							<div className='relative p-6 md:p-10 lg:p-14'>
								<div className='rounded-xl overflow-hidden shadow-2xl'>
									<img
										src='/images/kinesiologia-hibrida-2.png'
										alt='FisifyPro — Gestión de pacientes'
										className='w-full h-auto'
									/>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</section>

				{/* ══════════════════════════════════════ */}
				{/*  02 — ESTRUCTURA DEL PILOTO            */}
				{/* ══════════════════════════════════════ */}
				<section className='mb-32'>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className='flex items-center gap-4 mb-12'>
							<span className='text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/40 font-medium'>
								02
							</span>
							<div className='flex-1 border-t border-[#0a1628]/[0.08]' />
						</div>

						<h3
							className='text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-6'
							style={{ fontFamily: 'Outfit, sans-serif' }}
						>
							Estructura del piloto
							<br />
							<span className='font-semibold'>— 12 meses</span>
						</h3>

						<p className='text-[17px] text-[#0a1628]/70 font-light leading-[1.8] max-w-3xl mb-16'>
							El piloto se organiza en tres fases progresivas que permiten
							validar el modelo, optimizarlo y preparar el escalado. Cada fase
							tiene objetivos concretos, población objetivo y métricas de
							seguimiento.
						</p>

						{/* Phase accordion */}
						<div className='space-y-4'>
							{phases.map((phase, i) => (
								<motion.div
									key={phase.num}
									initial={{ opacity: 0, y: 16 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.08 }}
									viewport={{ once: true }}
									className={`border transition-all duration-300 ${
										expandedPhase === i
											? 'border-[#1a3a6e]/20 bg-white shadow-sm'
											: 'border-[#0a1628]/[0.08] bg-transparent hover:bg-white/60'
									}`}
								>
									<button
										onClick={() =>
											setExpandedPhase(expandedPhase === i ? null : i)
										}
										className='w-full flex items-center gap-6 px-8 py-6 text-left'
									>
										<span
											className={`text-xs font-medium tracking-widest transition-colors ${
												expandedPhase === i
													? 'text-[#1a3a6e]'
													: 'text-[#0a1628]/40'
											}`}
										>
											{phase.label}
										</span>
										<span className='text-[13px] text-[#1a3a6e] font-semibold tracking-wide'>
											{phase.months}
										</span>
										<span
											className='text-xl md:text-2xl font-light text-[#0a1628] tracking-tight flex-1'
											style={{ fontFamily: 'Outfit, sans-serif' }}
										>
											{phase.title}
										</span>
										<motion.span
											animate={{ rotate: expandedPhase === i ? 45 : 0 }}
											className='text-[#0a1628]/40 text-xl flex-shrink-0'
										>
											+
										</motion.span>
									</button>

									<motion.div
										initial={false}
										animate={{
											height: expandedPhase === i ? 'auto' : 0,
											opacity: expandedPhase === i ? 1 : 0,
										}}
										transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
										className='overflow-hidden'
									>
										<div className='px-8 pb-8 pt-2'>
											<div className='border-l-2 border-[#1a3a6e]/20 pl-6 space-y-4'>
												{phase.items.map((item, j) => (
													<div key={j} className='flex items-start gap-3'>
														<span className='w-1.5 h-1.5 rounded-full bg-[#1a3a6e] mt-2 flex-shrink-0' />
														<span className='text-[15px] text-[#0a1628]/75 font-light leading-relaxed'>
															{item}
														</span>
													</div>
												))}
											</div>
										</div>
									</motion.div>
								</motion.div>
							))}
						</div>

						{/* Screenshot 2 — Biblioteca de ejercicios (inside bg-gradient-2) */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='mt-20 rounded-2xl overflow-hidden relative'
						>
							<img
								src='/images/bg-gradient-2.png'
								alt=''
								className='absolute inset-0 w-full h-full object-cover'
							/>
							<div className='relative p-6 md:p-10 lg:p-14'>
								<div className='rounded-xl overflow-hidden shadow-2xl'>
									<img
										src='/images/kinesiologia-hibrida-3.jpg'
										alt='Fisify — Biblioteca de ejercicios con filtros avanzados'
										className='w-full h-auto'
									/>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</section>

				{/* ══════════════════════════════════════ */}
				{/*  03 — SOPORTE INTEGRAL FISIFY          */}
				{/* ══════════════════════════════════════ */}
				<section className='mb-32'>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className='flex items-center gap-4 mb-12'>
							<span className='text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/40 font-medium'>
								03
							</span>
							<div className='flex-1 border-t border-[#0a1628]/[0.08]' />
						</div>

						<h3
							className='text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-6'
							style={{ fontFamily: 'Outfit, sans-serif' }}
						>
							Soporte integral
							<br />
							<span className='font-semibold'>por parte de Fisify</span>
						</h3>

						<p className='text-[17px] text-[#0a1628]/70 font-light leading-[1.8] max-w-3xl mb-16'>
							Durante los 12 meses del piloto, Fisify asume la responsabilidad
							operativa del modelo digital, liberando al equipo de {clientName} de la
							carga de implementación y garantizando resultados desde el primer
							mes.
						</p>

						<div className='grid md:grid-cols-2 gap-0'>
							{[
								{
									num: 'a',
									title: 'Account Manager',
									body: `Account Manager para ${clientName} con conocimiento profundo del negocio, los afiliados y la red prestacional.`,
								},
								{
									num: 'b',
									title: 'Kinesiólogo en Argentina',
									body: 'Contratación de 1 kinesiólogo en Argentina para garantizar continuidad, calidad y tiempos de soporte continuo a los kinesiólogos.',
								},
								{
									num: 'c',
									title: 'Visitas presenciales',
									body: 'Visitas presenciales a los centros para entender dinámicas e identificar mejoras. Ejecución de las mejoras proporcionadas.',
								},
								{
									num: 'd',
									title: 'Reuniones de seguimiento',
									body: 'Reuniones mensuales de seguimiento con presentación de KPIs, aprendizajes y propuestas de mejora.',
								},
							].map((item, i) => (
								<motion.div
									key={item.num}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.08 }}
									viewport={{ once: true }}
									className={`py-10 px-8 lg:px-10 ${
										i % 2 !== 0 ? 'md:border-l border-[#0a1628]/[0.08]' : ''
									} ${i < 2 ? 'border-b border-[#0a1628]/[0.08]' : ''}`}
								>
									<div className='flex items-center gap-3 mb-5'>
										<span className='w-8 h-8 flex items-center justify-center border border-[#1a3a6e]/25 text-[#1a3a6e] text-xs font-semibold'>
											{item.num}
										</span>
										<h4
											className='text-lg font-medium text-[#0a1628] tracking-tight'
											style={{ fontFamily: 'Outfit, sans-serif' }}
										>
											{item.title}
										</h4>
									</div>
									<p className='text-[15px] text-[#0a1628]/70 font-light leading-[1.8]'>
										{item.body}
									</p>
								</motion.div>
							))}
						</div>

						{/* Screenshot 3 — Plan progresivo de recuperación (inside bg-gradient-5) */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='mt-20 rounded-2xl overflow-hidden relative'
						>
							<img
								src='/images/bg-gradient-5.png'
								alt=''
								className='absolute inset-0 w-full h-full object-cover'
							/>
							<div className='relative p-6 md:p-10 lg:p-14'>
								<div className='rounded-xl overflow-hidden shadow-2xl'>
									<img
										src='/images/kinesiologia-hibrida-4.jpg'
										alt='FisifyPro — Plan progresivo de recuperación cervical'
										className='w-full h-auto'
									/>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</section>

				{/* ══════════════════════════════════════ */}
				{/*  04 — KPIs DEL PILOTO                  */}
				{/* ══════════════════════════════════════ */}
				<section className='mb-20'>
					<motion.div
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className='flex items-center gap-4 mb-12'>
							<span className='text-[11px] uppercase tracking-[0.2em] text-[#0a1628]/40 font-medium'>
								04
							</span>
							<div className='flex-1 border-t border-[#0a1628]/[0.08]' />
						</div>

						<h3
							className='text-3xl md:text-4xl font-light text-[#0a1628] tracking-tight mb-6'
							style={{ fontFamily: 'Outfit, sans-serif' }}
						>
							KPIs
							<br />
							<span className='font-semibold'>del piloto</span>
						</h3>

						<p className='text-[17px] text-[#0a1628]/70 font-light leading-[1.8] max-w-3xl mb-16'>
							El éxito del piloto se medirá a través de cuatro dimensiones de
							impacto, con revisión mensual y un informe ejecutivo al cierre de
							cada fase.
						</p>

						<div className='grid md:grid-cols-2 gap-6'>
							{kpis.map((kpi, i) => (
								<motion.div
									key={kpi.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: i * 0.08 }}
									viewport={{ once: true }}
									className='border border-[#0a1628]/[0.08] bg-white p-8 lg:p-10'
								>
									<div className='flex items-center gap-4 mb-5'>
										<span className='w-10 h-10 flex items-center justify-center bg-[#1a3a6e]/10 rounded-lg text-[12px] font-bold text-[#1a3a6e] tracking-wide'>
											{kpi.num}
										</span>
										<h4
											className='text-lg font-semibold text-[#0a1628] tracking-tight'
											style={{ fontFamily: 'Outfit, sans-serif' }}
										>
											{kpi.title}
										</h4>
									</div>
									<p className='text-[15px] text-[#0a1628]/70 font-light leading-[1.8]'>
										{kpi.description}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>
				</section>

			</div>
		</div>
	);
}
