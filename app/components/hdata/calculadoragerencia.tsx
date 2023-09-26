import React, { useState } from 'react';
import { providers,priceCalculation } from './blinds';
import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';


export default function QuoteCalculator() {
  interface Window {
    provider: string;
    blind: string;
    fabric: string;
    color: string;
    price: number;
    width: number;
    height: number;
  }

  const [selectedProvider, setSelectedProvider] = useState('');
  const [selectedBlind, setSelectedBlind] = useState('');
  const [selectedFabric, setSelectedFabric] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [windows, setWindows] = useState<Window[]>([]);
  const [isAddingWindow, setIsAddingWindow] = useState(false);

  const providerOptions = providers.map((provider) => (
    <option key={provider.name} value={provider.name}>
      {provider.name}
    </option>
  ));

  const selectedProviderData = providers.find((provider) => provider.name === selectedProvider);
  const blindOptions = selectedProviderData
    ? selectedProviderData.blinds.map((blind) => (
        <option key={blind.name} value={blind.name}>
          {blind.name}
        </option>
      ))
    : [];

  const selectedBlindData = selectedProviderData?.blinds.find((blind) => blind.name === selectedBlind);
  const fabricOptions = selectedBlindData
    ? selectedBlindData.fabrics.map((fabric) => (
        <option key={fabric.name} value={fabric.name}>
          {fabric.name}
        </option>
      ))
    : [];

  const selectedFabricData = selectedBlindData?.fabrics.find((fabric) => fabric.name === selectedFabric);
  const colorOptions = selectedFabricData
    ? selectedFabricData.colors.map((color) => (
        <option key={color.name} value={color.name}>
          {color.name}
        </option>
      ))
    : [];

  const addWindow = () => {
    if (selectedProviderData && selectedBlindData && selectedFabricData && width > 0 && height > 0) {
        const provider = providers.find((provider) => provider.name === selectedProvider);
        const blind = provider?.blinds.find((blind) => blind.name === selectedBlind);
        const fabric = blind?.fabrics.find((fabric) => fabric.name === selectedFabric);
        const sqmprice = fabric?.sqmprice;
        const newWindow: Window = {
        provider: selectedProvider,
        blind: selectedBlindData.name,
        fabric: selectedFabricData.name,
        color: selectedColor,
        price: priceCalculation({width, height, sqmprice: sqmprice ? sqmprice: 0}),
        width: width,
        height: height,
      };

      setWindows([...windows, newWindow]);

      // Clear the form inputs for the next window
      //setSelectedProvider('');
     // setSelectedBlind('');
     // setSelectedFabric('');
      setWidth(0);
      setHeight(0);
      setIsAddingWindow(false);
    }
  };

  const toggleAddingWindow = () => {
    setIsAddingWindow(!isAddingWindow);
  };

  const deleteWindow = (index: number) => {
    const updatedWindows = [...windows];
    updatedWindows.splice(index, 1);
    setWindows(updatedWindows);
  };

  const totalPrice = windows.reduce((sum, window) => sum + window.price, 0);
  return (
    <div>
      <select value={selectedProvider} onChange={(e) => setSelectedProvider(e.target.value)}>
        <option value="">Select a Provider</option>
        {providerOptions}
      </select>

      <select value={selectedBlind} onChange={(e) => setSelectedBlind(e.target.value)}>
        <option value="">Select a Blind</option>
        {blindOptions}
      </select>

      <select value={selectedFabric} onChange={(e) => setSelectedFabric(e.target.value)}>
        <option value="">Select a Fabric</option>
        {fabricOptions}
      </select>

      <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
        <option value="">Select a Color</option>
        {colorOptions}
      </select>

      <div>
        <label>Width (in inches):</label>
        <input type="number" value={width} onChange={(e) => setWidth(parseInt(e.target.value, 10))} />
      </div>

      <div>
        <label>Height (in inches):</label>
        <input type="number" value={height} onChange={(e) => setHeight(parseInt(e.target.value, 10))} />
      </div>

      {isAddingWindow ? (
        <button onClick={addWindow}>Add Window</button>
      ) : (
        <button onClick={toggleAddingWindow}>Add New Window</button>
      )}

<div>
<TableContainer>
  <Table variant='striped' colorScheme='grey' maxWidth={"30%"}>
    <Thead>
      <Tr>
        <Th>#</Th>
        <Th>Ancho(cm)</Th>
        <Th>Alto(cm)</Th>
        <Th>Prov</Th>
        <Th >Tipo</Th>
        <Th >Tela</Th>
        <Th >Color</Th>
        <Th >Precio</Th>
        <Th> Borrar</Th>
      </Tr>
    </Thead>
    <Tbody>
      
        {windows.map((window, index) => (
          
            <Tr key={index}>
            <Td>{index + 1}</Td>
            <Td>{window.width} </Td>
            <Td>{window.height}</Td>
            <Td>{window.provider}</Td>
            <Td>{window.blind}</Td>
            <Td>{window.fabric}</Td>
            <Td>{window.color}</Td>
            <Td>{window.price}</Td>
            <Td>
            <button onClick={() => deleteWindow(index)}>Delete</button>
            </Td>
            </Tr>
        ))}
      
    </Tbody>
    <Tfoot>
      <Tr>
        
        <Th colSpan={6}></Th>
        <Th >Precio Total:</Th>
        <Th >{totalPrice}</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
      </div>
    </div>
  );
}
