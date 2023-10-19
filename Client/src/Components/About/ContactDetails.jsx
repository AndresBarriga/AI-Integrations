import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';

const contacts = [
	{
		id: 1,
		name: 'Berlin, 10437, Germany',
		icon: <FiMapPin />,
	},
	{
		id: 2,
		name: 'andresbarrigaru@gmail.com',
		icon: <FiMail />,
	},
	{
		id: 3,
		name: '+34 618 481 392',
		icon: <FiPhone />,
	},
];

const ContactDetails = () => {
	return (
		<div className="w-full ">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-4xl text-primary-dark mt-12 mb-8">
					Contact details
				</h2>
				<ul className="font-general-regular">
					{contacts.map((contact) => (
						<li className="flex " key={contact.id}>
							<i className="text-3xl text-gray-500 mr-4">
								{contact.icon}
							</i>
							<span className="text-xl mb-4 text-ternary-dark ">
								{contact.name}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ContactDetails;