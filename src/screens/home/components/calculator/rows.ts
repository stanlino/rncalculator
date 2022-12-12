interface Button {
  name: string
  type: 'number' | 'operator'
  value: string
  icon?: boolean
}

type Row = Button[]

const rows: Row[] = [
  [{
    name: 'AC',
    type: 'operator',
    value: 'AC',
  },
  {
    name: 'arrow-left',
    type: 'operator',
    value: 'C',
    icon: true
  },
  {
    name: 'divide',
    type: 'operator',
    value: '/',
    icon: true
  }],
  [
    {
      name: '7',
      type: 'number',
      value: '7',
    },
    {
      name: '8',
      type: 'number',
      value: '8',
    },
    {
      name: '9',
      type: 'number',
      value: '9',
    },
    {
      name: 'x',
      type: 'operator',
      value: '*',
      icon: true
    }
  ],
  [
    {
      name: '4',
      type: 'number',
      value: '4',
    },
    {
      name: '5',
      type: 'number',
      value: '5',
    },
    {
      name: '6',
      type: 'number',
      value: '6',
    },
    {
      name: 'minus',
      type: 'operator',
      value: '-',
      icon: true
    }
  ],
  [
    {
      name: '1',
      type: 'number',
      value: '1',
    },
    {
      name: '2',
      type: 'number',
      value: '2',
    },
    {
      name: '3',
      type: 'number',
      value: '3',
    },
    {
      name: 'plus',
      type: 'operator',
      value: '+',
      icon: true
    }
  ],
  [
    {
      name: '0',
      type: 'number',
      value: '0',
    },
    {
      name: '.',
      type: 'operator',
      value: '.',
    },
    {
      name: '=',
      type: 'operator',
      value: '=',
    }
  ]
]

export default rows