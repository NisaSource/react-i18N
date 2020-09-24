import React, { useState } from 'react';
import { I18nProvider, LOCALES } from '../i18n';
import Translation from '../i18n/Translatation';

const Content = () => {
	const [locale, setLocale] = useState(LOCALES.ENGLISH);

	return (
		<>
			<I18nProvider locale={locale}>
				<div>
					<button
						type="button"
						className="btn btn-primary mr-3"
						onClick={() => setLocale(LOCALES.ENGLISH)}
					>
						English
					</button>
					<button
						type="button"
						className="btn btn-success mr-3"
						onClick={() => setLocale(LOCALES.INDONESIAN)}
					>
						Indonesian
					</button>
					<button
						type="button"
						className="btn btn-warning mr-3"
						onClick={() => setLocale(LOCALES.ITALIAN)}
					>
						Italian
					</button>
					<button
						type="button"
						className="btn btn-info"
						onClick={() => setLocale(LOCALES.SPAIN)}
					>
						Spain
					</button>
				</div>
				<br />
				<div>
					<p>
						{Translation('hello')}, {Translation('welcome')}.
					</p>
					<hr />
					<p>Hello, welcome to multilingual app.</p>
					<hr />
				</div>
			</I18nProvider>
		</>
	);
};

export default Content;
