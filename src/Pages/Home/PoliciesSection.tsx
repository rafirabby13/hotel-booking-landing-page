import React from 'react';

const PoliciesSection = () => {
  const policies = [
    {
      title: 'Check-in',
      details: (
        <>
          <p className="font-semibold text-gray-800">Available 24 hours</p>
          <p className="text-gray-600">Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.</p>
        </>
      ),
    },
    {
      title: 'Check-out',
      details: (
        <>
          <p className="font-semibold text-gray-800">Available 24 hours</p>
        </>
      ),
    },
    {
      title: 'Cancellation/ prepayment',
      details: (
        <>
          <p className="text-gray-600">Cancellation and prepayment policies vary according to accommodation type. Please check what <a href="#" className="text-blue-600 hover:underline">conditions</a> may apply to each option when making your selection.</p>
        </>
      ),
    },
    {
      title: 'Children and beds',
      details: (
        <>
          <p className="font-semibold text-gray-800 mb-1">Child policies</p>
          <p className="text-gray-600">Children of any age are welcome.</p>
          <p className="text-gray-600">Children 12 years and above will be charged as adults at this property.</p>
          <p className="text-gray-600">To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.</p>
          <p className="font-semibold text-gray-800 mt-3 mb-1">Cot and extra bed policies</p>
          <p className="text-gray-600">The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more information.</p>
          <p className="text-gray-600">There are no cots available at this property.</p>
          <p className="text-gray-600">All extra beds are subject to availability.</p>
        </>
      ),
    },
    {
      title: 'No age restriction',
      details: (
        <>
          <p className="text-gray-600">There is no age requirement for check-in.</p>
        </>
      ),
    },
    {
      title: 'Pets',
      details: (
        <>
          <p className="text-gray-600">Pets are not allowed.</p>
        </>
      ),
    },
    {
      title: 'Cash only',
      details: (
        <>
          <p className="text-gray-600">This property only accepts cash payments.</p>
        </>
      ),
    },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Policies</h2>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 divide-y divide-gray-200">
        {policies.map((policy, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {/* Policy Title Column */}
            <div className="col-span-1 text-lg font-medium text-gray-800 md:pr-4">
              {policy.title}
            </div>
            {/* Policy Details Column */}
            <div className="col-span-full md:col-span-2 text-gray-700 leading-relaxed">
              {policy.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PoliciesSection;
