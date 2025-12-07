import React, { useState } from 'react';
import { Calendar, Sprout, Clock, Package, Grid, Rows, Plus, Edit2, Trash2 } from 'lucide-react';

export default function GardenPlanner() {
  const [beds, setBeds] = useState([
    { id: 1, name: 'Raised Bed 1', squares: initializeSquares() },
    { id: 2, name: 'Raised Bed 2', squares: initializeSquares() }
  ]);
  
  const [selectedDot, setSelectedDot] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showBatchModal, setShowBatchModal] = useState(false);
  const [showVeggieManager, setShowVeggieManager] = useState(false);
  const [batchConfig, setBatchConfig] = useState({ bedId: null, mode: 'row', rowIndex: null });
  
  const defaultVegetables = [
    { name: 'Tomato', abbrev: 'TOM', daysToMaturity: 70, color: '#ef4444' },
    { name: 'Lettuce', abbrev: 'LET', daysToMaturity: 45, color: '#22c55e' },
    { name: 'Carrot', abbrev: 'CAR', daysToMaturity: 70, color: '#f97316' },
    { name: 'Pepper', abbrev: 'PEP', daysToMaturity: 80, color: '#eab308' },
    { name: 'Cucumber', abbrev: 'CUC', daysToMaturity: 55, color: '#84cc16' },
    { name: 'Radish', abbrev: 'RAD', daysToMaturity: 25, color: '#ec4899' },
    { name: 'Spinach', abbrev: 'SPI', daysToMaturity: 40, color: '#10b981' },
    { name: 'Bean', abbrev: 'BEA', daysToMaturity: 55, color: '#8b5cf6' },
    { name: 'Pea', abbrev: 'PEA', daysToMaturity: 60, color: '#6366f1' },
    { name: 'Onion', abbrev: 'ONI', daysToMaturity: 100, color: '#f59e0b' },
    { name: 'Broccoli', abbrev: 'BRO', daysToMaturity: 85, color: '#059669' },
    { name: 'Cauliflower', abbrev: 'CAU', daysToMaturity: 85, color: '#f5f5f4' },
    { name: 'Potato', abbrev: 'POT', daysToMaturity: 90, color: '#92400e' },
    { name: 'None', abbrev: '', daysToMaturity: 0, color: '#d1d5db' }
  ];
  
  const [vegetables, setVegetables] = useState(defaultVegetables);
  
  function initializeSquares() {
    const squares = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 6; col++) {
        squares.push({
          row,
          col,
          dotCount: 4,
          dots: createDots(4)
        });
      }
    }
    return squares;
  }
  
  function createDots(count) {
    const dots = [];
    for (let i = 0; i < count; i++) {
      dots.push({ 
        id: i, 
        vegetable: null, 
        plantingDate: '', 
        daysToMaturity: 0, 
        harvestDate: '',
        color: '#d1d5db'
      });
    }
    return dots;
  }
  
  function calculateHarvestDate(plantingDate, daysToMaturity) {
    if (!plantingDate || !daysToMaturity) return '';
    const date = new Date(plantingDate);
    date.setDate(date.getDate() + daysToMaturity);
    return date.toISOString().split('T')[0];
  }
  
  function handleDotClick(bedId, squareIndex, dotId) {
    const bed = beds.find(b => b.id === bedId);
    const square = bed.squares[squareIndex];
    const dot = square.dots[dotId];
    
    setSelectedDot({
      bedId,
      squareIndex,
      dotId,
      ...dot
    });
    setShowModal(true);
  }
  
  function handleBatchPlant(bedId, mode, rowIndex = null) {
    setBatchConfig({ bedId, mode, rowIndex });
    setShowBatchModal(true);
  }
  
  function applyBatchPlanting(batchData) {
    const { vegetable, plantingDate, daysToMaturity, dotCount } = batchData;
    const veggie = vegetables.find(v => v.name === vegetable);
    const harvestDate = calculateHarvestDate(plantingDate, daysToMaturity);
    
    const newBeds = beds.map(bed => {
      if (bed.id === batchConfig.bedId) {
        const newSquares = bed.squares.map((square, index) => {
          const shouldUpdate = batchConfig.mode === 'square' 
            ? true 
            : square.row === batchConfig.rowIndex;
          
          if (shouldUpdate) {
            const newDots = createDots(dotCount).map(dot => ({
              ...dot,
              vegetable,
              plantingDate,
              daysToMaturity,
              harvestDate,
              color: veggie?.color || '#d1d5db'
            }));
            
            return { ...square, dotCount, dots: newDots };
          }
          return square;
        });
        
        return { ...bed, squares: newSquares };
      }
      return bed;
    });
    
    setBeds(newBeds);
    setShowBatchModal(false);
  }
  
  function updateSquareDotCount(bedId, squareIndex, newDotCount) {
    const newBeds = beds.map(bed => {
      if (bed.id === bedId) {
        const newSquares = [...bed.squares];
        const square = newSquares[squareIndex];
        const currentDots = square.dots;
        
        let newDots;
        if (newDotCount > currentDots.length) {
          newDots = [...currentDots, ...createDots(newDotCount - currentDots.length)];
        } else {
          newDots = currentDots.slice(0, newDotCount);
        }
        
        newDots = newDots.map((dot, idx) => ({ ...dot, id: idx }));
        newSquares[squareIndex] = { ...square, dotCount: newDotCount, dots: newDots };
        
        return { ...bed, squares: newSquares };
      }
      return bed;
    });
    
    setBeds(newBeds);
  }
  
  function handleSave(updatedData) {
    const newBeds = beds.map(bed => {
      if (bed.id === selectedDot.bedId) {
        const newSquares = [...bed.squares];
        const veggie = vegetables.find(v => v.name === updatedData.vegetable);
        const harvestDate = calculateHarvestDate(updatedData.plantingDate, updatedData.daysToMaturity);
        
        newSquares[selectedDot.squareIndex].dots[selectedDot.dotId] = {
          id: selectedDot.dotId,
          vegetable: updatedData.vegetable,
          plantingDate: updatedData.plantingDate,
          daysToMaturity: updatedData.daysToMaturity,
          harvestDate: harvestDate,
          color: veggie?.color || '#d1d5db'
        };
        
        return { ...bed, squares: newSquares };
      }
      return bed;
    });
    
    setBeds(newBeds);
    setShowModal(false);
    setSelectedDot(null);
  }
  
  function addCustomVegetable(newVeggie) {
    setVegetables([...vegetables, newVeggie]);
  }
  
  function updateVegetable(oldName, updatedVeggie) {
    const newVegetables = vegetables.map(v => 
      v.name === oldName ? updatedVeggie : v
    );
    setVegetables(newVegetables);
    
    // Update all dots with this vegetable
    const newBeds = beds.map(bed => ({
      ...bed,
      squares: bed.squares.map(square => ({
        ...square,
        dots: square.dots.map(dot => 
          dot.vegetable === oldName 
            ? { ...dot, vegetable: updatedVeggie.name, color: updatedVeggie.color }
            : dot
        )
      }))
    }));
    setBeds(newBeds);
  }
  
  function deleteVegetable(vegName) {
    setVegetables(vegetables.filter(v => v.name !== vegName));
    
    // Remove this vegetable from all dots
    const newBeds = beds.map(bed => ({
      ...bed,
      squares: bed.squares.map(square => ({
        ...square,
        dots: square.dots.map(dot => 
          dot.vegetable === vegName 
            ? { ...dot, vegetable: null, color: '#d1d5db', plantingDate: '', daysToMaturity: 0, harvestDate: '' }
            : dot
        )
      }))
    }));
    setBeds(newBeds);
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2 flex items-center justify-center gap-3">
            <Sprout className="w-10 h-10" />
            Square Foot Garden Planner
          </h1>
          <p className="text-green-700">Plan your two 3ft × 6ft raised bed gardens</p>
          
          <button
            onClick={() => setShowVeggieManager(true)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors flex items-center gap-2 mx-auto"
          >
            <Edit2 className="w-4 h-4" />
            Manage Vegetables
          </button>
        </div>
        
        <div className="space-y-12">
          {beds.map(bed => (
            <div key={bed.id} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-800">{bed.name}</h2>
                <button
                  onClick={() => handleBatchPlant(bed.id, 'square')}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-colors flex items-center gap-2"
                >
                  <Grid className="w-4 h-4" />
                  Fill All Squares
                </button>
              </div>
              
              <div className="inline-block border-4 border-amber-800 bg-amber-50 p-4 rounded-lg">
                <div className="space-y-2">
                  {[0, 1, 2].map(rowIndex => (
                    <div key={rowIndex}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-gray-600 w-16">Row {rowIndex + 1}</span>
                        <button
                          onClick={() => handleBatchPlant(bed.id, 'row', rowIndex)}
                          className="px-3 py-1 bg-indigo-600 text-white text-xs rounded hover:bg-indigo-700 font-semibold transition-colors flex items-center gap-1"
                        >
                          <Rows className="w-3 h-3" />
                          Fill Row
                        </button>
                      </div>
                      
                      <div className="grid grid-cols-6 gap-3">
                        {bed.squares
                          .filter(square => square.row === rowIndex)
                          .map((square, squareIndex) => {
                            const actualSquareIndex = rowIndex * 6 + squareIndex;
                            return (
                              <SquareComponent
                                key={`${square.row}-${square.col}`}
                                square={square}
                                bedId={bed.id}
                                squareIndex={actualSquareIndex}
                                vegetables={vegetables}
                                onDotClick={handleDotClick}
                                onDotCountChange={updateSquareDotCount}
                              />
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Legend for this bed */}
              <div className="mt-6 flex flex-wrap gap-2">
                {vegetables.filter(v => v.name !== 'None' && 
                  bed.squares.some(s => s.dots.some(d => d.vegetable === v.name))
                ).map(veg => (
                  <div key={veg.name} className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                    <div 
                      className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center"
                      style={{ backgroundColor: veg.color }}
                    >
                      <span className="text-xs font-bold text-white drop-shadow-md">{veg.abbrev}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{veg.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modals */}
      {showModal && selectedDot && (
        <PlantModal
          selectedDot={selectedDot}
          vegetables={vegetables}
          onSave={handleSave}
          onClose={() => {
            setShowModal(false);
            setSelectedDot(null);
          }}
          calculateHarvestDate={calculateHarvestDate}
        />
      )}
      
      {showBatchModal && (
        <BatchPlantModal
          config={batchConfig}
          vegetables={vegetables}
          onSave={applyBatchPlanting}
          onClose={() => setShowBatchModal(false)}
        />
      )}
      
      {showVeggieManager && (
        <VegetableManager
          vegetables={vegetables}
          onAdd={addCustomVegetable}
          onUpdate={updateVegetable}
          onDelete={deleteVegetable}
          onClose={() => setShowVeggieManager(false)}
        />
      )}
    </div>
  );
}

// Square Component with variable dot display
function SquareComponent({ square, bedId, squareIndex, vegetables, onDotClick, onDotCountChange }) {
  const [showDotConfig, setShowDotConfig] = useState(false);
  
  const gridClass = square.dotCount === 1 
    ? 'flex items-center justify-center'
    : square.dotCount === 2
    ? 'grid grid-cols-2 gap-1'
    : square.dotCount === 3
    ? 'grid grid-cols-3 gap-1'
    : square.dotCount === 4
    ? 'grid grid-cols-2 grid-rows-2 gap-1'
    : square.dotCount === 6
    ? 'grid grid-cols-3 grid-rows-2 gap-1'
    : square.dotCount === 9
    ? 'grid grid-cols-3 grid-rows-3 gap-1'
    : 'grid grid-cols-4 grid-rows-4 gap-1';
  
  return (
    <div className="relative group">
      <div className="w-24 h-24 border-2 border-green-700 bg-white rounded relative">
        <div className={`absolute inset-0 p-2 ${gridClass}`}>
          {square.dots.map(dot => {
            const veggie = vegetables.find(v => v.name === dot.vegetable);
            return (
              <button
                key={dot.id}
                onClick={() => onDotClick(bedId, squareIndex, dot.id)}
                className="w-full h-full rounded-full border-2 border-gray-300 hover:border-green-600 transition-all hover:scale-110 flex items-center justify-center"
                style={{ 
                  backgroundColor: dot.vegetable ? dot.color : '#f3f4f6',
                  boxShadow: dot.vegetable ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                }}
                title={dot.vegetable || 'Empty'}
              >
                {dot.vegetable && veggie && (
                  <span className="text-xs font-bold text-white drop-shadow-md">
                    {veggie.abbrev}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Dot count configurator */}
      <button
        onClick={() => setShowDotConfig(!showDotConfig)}
        className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 text-white rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600"
        title="Change dot count"
      >
        {square.dotCount}
      </button>
      
      {showDotConfig && (
        <div className="absolute top-8 right-0 bg-white border-2 border-gray-300 rounded shadow-lg p-2 z-10">
          <div className="text-xs font-semibold mb-1">Plants per square:</div>
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3, 4, 6, 9, 16].map(count => (
              <button
                key={count}
                onClick={() => {
                  onDotCountChange(bedId, squareIndex, count);
                  setShowDotConfig(false);
                }}
                className={`px-2 py-1 text-xs rounded ${
                  square.dotCount === count
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {count}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PlantModal({ selectedDot, vegetables, onSave, onClose, calculateHarvestDate }) {
  const [formData, setFormData] = useState({
    vegetable: selectedDot.vegetable || '',
    plantingDate: selectedDot.plantingDate || '',
    daysToMaturity: selectedDot.daysToMaturity || '',
    harvestDate: selectedDot.harvestDate || ''
  });
  
  function handleVegetableChange(vegName) {
    const veg = vegetables.find(v => v.name === vegName);
    const newData = {
      ...formData,
      vegetable: vegName,
      daysToMaturity: veg?.daysToMaturity || 0
    };
    
    if (formData.plantingDate) {
      newData.harvestDate = calculateHarvestDate(formData.plantingDate, veg?.daysToMaturity || 0);
    }
    
    setFormData(newData);
  }
  
  function handlePlantingDateChange(date) {
    const newData = {
      ...formData,
      plantingDate: date,
      harvestDate: calculateHarvestDate(date, formData.daysToMaturity)
    };
    setFormData(newData);
  }
  
  function handleDaysChange(days) {
    const newData = {
      ...formData,
      daysToMaturity: parseInt(days) || 0,
      harvestDate: calculateHarvestDate(formData.plantingDate, parseInt(days) || 0)
    };
    setFormData(newData);
  }
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-green-800 flex items-center gap-2">
            <Sprout className="w-6 h-6" />
            Plant Details
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Vegetable Type */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Package className="w-4 h-4" />
              Vegetable Type
            </label>
            <select
              value={formData.vegetable}
              onChange={(e) => handleVegetableChange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
            >
              <option value="">Select vegetable...</option>
              {vegetables.map(veg => (
                <option key={veg.name} value={veg.name}>{veg.name}</option>
              ))}
            </select>
          </div>
          
          {/* Planting Date */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="w-4 h-4" />
              Planting Start Date
            </label>
            <input
              type="date"
              value={formData.plantingDate}
              onChange={(e) => handlePlantingDateChange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
            />
          </div>
          
          {/* Days to Maturity */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Clock className="w-4 h-4" />
              Days to Maturity
            </label>
            <input
              type="number"
              value={formData.daysToMaturity}
              onChange={(e) => handleDaysChange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
              min="0"
            />
          </div>
          
          {/* Harvest Date */}
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="w-4 h-4" />
              Expected Harvest Date
            </label>
            <input
              type="date"
              value={formData.harvestDate}
              readOnly
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg bg-gray-50 text-gray-600"
            />
          </div>
        </div>
        
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(formData)}
            className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

// Batch Planting Modal
function BatchPlantModal({ config, vegetables, onSave, onClose }) {
  const [formData, setFormData] = useState({
    vegetable: '',
    plantingDate: '',
    daysToMaturity: '',
    dotCount: 4
  });
  
  function handleVegetableChange(vegName) {
    const veg = vegetables.find(v => v.name === vegName);
    setFormData({
      ...formData,
      vegetable: vegName,
      daysToMaturity: veg?.daysToMaturity || 0
    });
  }
  
  const modeText = config.mode === 'row' 
    ? `Row ${config.rowIndex + 1}` 
    : 'All Squares';
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-purple-800 flex items-center gap-2">
            <Grid className="w-6 h-6" />
            Batch Plant: {modeText}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Package className="w-4 h-4" />
              Vegetable Type
            </label>
            <select
              value={formData.vegetable}
              onChange={(e) => handleVegetableChange(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
            >
              <option value="">Select vegetable...</option>
              {vegetables.map(veg => (
                <option key={veg.name} value={veg.name}>{veg.name}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Calendar className="w-4 h-4" />
              Planting Date
            </label>
            <input
              type="date"
              value={formData.plantingDate}
              onChange={(e) => setFormData({ ...formData, plantingDate: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              <Clock className="w-4 h-4" />
              Days to Maturity
            </label>
            <input
              type="number"
              value={formData.daysToMaturity}
              onChange={(e) => setFormData({ ...formData, daysToMaturity: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              min="0"
            />
          </div>
          
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
              Plants per Square Foot
            </label>
            <select
              value={formData.dotCount}
              onChange={(e) => setFormData({ ...formData, dotCount: parseInt(e.target.value) })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
            >
              <option value={1}>1 plant (e.g., Potato, Tomato)</option>
              <option value={2}>2 plants</option>
              <option value={3}>3 plants</option>
              <option value={4}>4 plants (e.g., Lettuce, Chard)</option>
              <option value={6}>6 plants</option>
              <option value={9}>9 plants (e.g., Beets, Spinach)</option>
              <option value={16}>16 plants (e.g., Carrots, Radishes)</option>
            </select>
          </div>
        </div>
        
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-semibold transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(formData)}
            className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-colors"
          >
            Apply to {modeText}
          </button>
        </div>
      </div>
    </div>
  );
}

// Vegetable Manager Modal
function VegetableManager({ vegetables, onAdd, onUpdate, onDelete, onClose }) {
  const [editingVeg, setEditingVeg] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    abbrev: '',
    daysToMaturity: 0,
    color: '#22c55e'
  });
  
  function startEdit(veg) {
    setEditingVeg(veg.name);
    setFormData({ ...veg });
    setIsAdding(false);
  }
  
  function startAdd() {
    setIsAdding(true);
    setEditingVeg(null);
    setFormData({
      name: '',
      abbrev: '',
      daysToMaturity: 0,
      color: '#22c55e'
    });
  }
  
  function handleSave() {
    if (!formData.name || !formData.abbrev) {
      alert('Please fill in name and abbreviation');
      return;
    }
    
    if (isAdding) {
      if (vegetables.some(v => v.name === formData.name)) {
        alert('A vegetable with this name already exists');
        return;
      }
      onAdd(formData);
    } else {
      onUpdate(editingVeg, formData);
    }
    
    setEditingVeg(null);
    setIsAdding(false);
    setFormData({ name: '', abbrev: '', daysToMaturity: 0, color: '#22c55e' });
  }
  
  function handleDelete(vegName) {
    if (vegName === 'None') {
      alert('Cannot delete "None"');
      return;
    }
    if (confirm(`Delete ${vegName}? This will remove it from all plantings.`)) {
      onDelete(vegName);
    }
  }
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
            <Sprout className="w-6 h-6" />
            Manage Vegetables
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            ×
          </button>
        </div>
        
        <button
          onClick={startAdd}
          className="w-full mb-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Custom Vegetable
        </button>
        
        {(isAdding || editingVeg) && (
          <div className="mb-6 p-4 border-2 border-blue-300 rounded-lg bg-blue-50">
            <h4 className="font-bold mb-3">{isAdding ? 'New Vegetable' : 'Edit Vegetable'}</h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  placeholder="e.g., Potato"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Abbreviation (3 chars)</label>
                <input
                  type="text"
                  maxLength={3}
                  value={formData.abbrev}
                  onChange={(e) => setFormData({ ...formData, abbrev: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  placeholder="e.g., POT"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Days to Maturity</label>
                <input
                  type="number"
                  value={formData.daysToMaturity}
                  onChange={(e) => setFormData({ ...formData, daysToMaturity: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  min="0"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Color</label>
                <input
                  type="color"
                  value={formData.color}
                  onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                  className="w-full h-10 px-1 py-1 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => {
                  setIsAdding(false);
                  setEditingVeg(null);
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                {isAdding ? 'Add' : 'Save'}
              </button>
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          {vegetables.map(veg => (
            <div
              key={veg.name}
              className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center"
                  style={{ backgroundColor: veg.color }}
                >
                  <span className="text-sm font-bold text-white drop-shadow">{veg.abbrev}</span>
                </div>
                <div>
                  <div className="font-semibold">{veg.name}</div>
                  <div className="text-sm text-gray-600">{veg.daysToMaturity} days to maturity</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(veg)}
                  className="p-2 text-blue-600 hover:bg-blue-100 rounded transition-colors"
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                {veg.name !== 'None' && (
                  <button
                    onClick={() => handleDelete(veg.name)}
                    className="p-2 text-red-600 hover:bg-red-100 rounded transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={onClose}
          className="w-full mt-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}