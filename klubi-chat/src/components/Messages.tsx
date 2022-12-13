//create a items list in react with typescript?
interface IListProps<T> {
    handleRemove: (item: T) => void;
    itemsList: T[];
    getItem: (v: T, index: number) => string; //pass this function into your component
}


const List = <T,>({ handleRemove, itemsList, getItem }: React.PropsWithChildren<IListProps<T>>): JSX.Element => (
    <ListWrapper>
        <ul style={{ listStyleType: 'none', padding: '0', margin: 0 }}>
            {itemsList.map((item, index) => (
                <DivWithToolTip
                    data-tooltip={item}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    style={{
                        display: 'flex',
                        justifyContent: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <li style={{ marginTop: '10px' }}>{getItem(item, index)}</li>
                    <PlusButton
                        style={{ marginTop: '10px' }}
                        {...{ addIcon: false }}
                        onClick={() => handleRemove(item)}
                    />
                </DivWithToolTip>
            ))}
        </ul>
    </ListWrapper>
);


const [items,setItems] = React.useState([{name:"Christian"}]);
return <List 
           itemsList = {items} 
           handleRemove = {(item) => setItems(items.filter(v => v != item)} 
           getItem={(v, i) => `${v.name}`} />


