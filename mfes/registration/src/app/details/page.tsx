'use client';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { CustomTypography, Layout } from '@shared-lib';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import CommonCollapse from 'libs/shared-lib/src/lib/Collapse/CommonCollapse';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Content() {
  const [searchValue, setSearchValue] = useState('');
  const handleAccountClick = () => {
    console.log('Account clicked');
  };
  const handleMenuClick = () => {
    console.log('Menu icon clicked');
  };

  const handleSearchClick = () => {
    console.log('Search button clicked');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  const accordionData = [
    {
      id: 'accordion1',
      title: 'Topic 1 - Real Numbers',
      content: (
        <div>
          <div>The Fundamental Theorem of Arithmetic</div>
          <div>Irrational Numbers</div>
          <div>Rational Numbers</div>
        </div>
      ),

      defaultExpanded: true,
    },
    {
      id: 'accordion2',
      title: 'Topic 2 - Irrational Numbers',
      content: (
        <div>
          <div>The Fundamental Theorem of Arithmetic</div>
          <div>Irrational Numbers</div>
        </div>
      ),
      image: '/images/irrational-numbers.png',
      list: ['The Fundamental Theorem of Arithmetic', 'Irrational Numbers'],
      actions: [
        {
          label: 'Edit',
          onClick: () => console.log('Edit clicked for Accordion 2'),
        },
        {
          label: 'Delete',
          onClick: () => console.log('Delete clicked for Accordion 2'),
        },
      ],
    },
    {
      id: 'accordion3',
      title: 'Topic 3 - Rational Numbers',
      content: (
        <div>
          <div>The Fundamental Theorem of Arithmetic</div>
          <div>Rational Numbers</div>
        </div>
      ),
      image: '/images/irrational-numbers.png',
      list: ['The Fundamental Theorem of Arithmetic', 'Irrational Numbers'],
      actions: [
        {
          label: 'Save',
          onClick: () => console.log('Save clicked for Accordion 3'),
        },
      ],
    },
  ];
  const syllabusList = [
    'Supporting line text lorem ipsum dolor sit amet, consectetur',
    'Supporting line text lorem ipsum dolor sit amet, consectetur',
    'Supporting line text lorem ipsum dolor sit amet, consectetur',
    'Supporting line text lorem ipsum dolor sit amet, consectetur',
  ];
  return (
    <Layout
      showTopAppBar={{
        title: 'Content Details',
        showMenuIcon: true,
        menuIconClick: handleMenuClick,
        actionButtonLabel: 'Action',
        actionIcons: [
          {
            icon: <AccountCircleIcon />,
            ariaLabel: 'Account',
            onClick: handleAccountClick,
          },
        ],
      }}
      showSearch={{
        placeholder: 'Search content..',
        rightIcon: <SearchIcon />,
        inputValue: searchValue,
        onInputChange: handleSearchChange,
        onRightIconClick: handleSearchClick,
        sx: {
          backgroundColor: '#f0f0f0',
          padding: '4px',
          borderRadius: '50px',
          width: '100%',
        },
      }}
      isFooter={true}
      showLogo={true}
      showBack={true}
      sx={{ height: '0vh' }}
    >
      <Box
        sx={{
          width: '100%',
          marginTop: '50px',
        }}
      >
        <Box sx={{ margin: '15px' }}>
          <img
            src={'/static/images/cards/salad.jpg'}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <CustomTypography
            variant="h6"
            sx={{ marginTop: '10px', fontWeight: 'bold' }}
          >
            Title
          </CustomTypography>
          {syllabusList.map((item) => (
            <ul>
              <li key={item}>{item}</li>
            </ul>
          ))}
        </Box>

        {accordionData.map((item) => (
          <CommonCollapse
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            status="Completed"
            showIcon
            icon={<CheckCircleIcon sx={{ color: 'green' }} />}
            // actions={item.actions}
            defaultExpanded={item.defaultExpanded}
          />
        ))}
      </Box>
    </Layout>
  );
}
