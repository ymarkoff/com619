<template>
	<div class="flex flex-col">
		<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
				<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
					<table class="min-w-full divide-y divide-gray-200">
						<thead class="bg-gray-50">
							<tr>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Dock
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Berths
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									True Bearing
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Advertised Depth
								</th>
								<th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
									Length (m)
								</th>
								<!-- <th scope="col" class="relative px-6 py-3">
									<span class="sr-only">Edit</span>
								</th> -->
							</tr>
						</thead>
						<tbody class="bg-white divide-y divide-gray-200">
							<tr v-for="dock in docks" :key="dock.dockName">
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									<div class="flex h-full w-full">
										{{dock.dockName}}
									</div>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									<p v-for="item in dock.list" :key="item.berths[0]">{{ item.berths[0]}}, {{item.berths[1]}}</p>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									<p v-for="item in dock.list" :key="item.trueBearing[0]">{{ item.trueBearing[0]}}, {{item.trueBearing[1]}}</p>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									<p v-for="item in dock.list" :key="item.advertisedDepth">{{ item.advertisedDepth}}</p>
								</td>
								<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
									<p v-for="item in dock.list" :key="item.length">{{ item.length}}</p>
								</td>
							</tr>

							<!-- More people... -->
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
	setup() {
		
	},
})
</script>


<script>
	module.exports = {
		data: function() {
			return {
				docks: [
					{
						dockName: 'Itchen Quays',
						list :[
							{
								berths: [30, 33],
								trueBearing: ['019', '199'],
								advertisedDepth: '9.1',
								length: 263,
							},
							{
								berths: [34, 36],
								trueBearing: ['003', '183'],
								advertisedDepth: '9.9',
								length: 480,
							},
						]
					},
					{
						dockName: 'Empress Dock',
						list :[
							{
								berths: [20, 21],
								trueBearing: ['005', '185'],
								advertisedDepth: '7.5',
								length: 258,
							},
							{
								berths: [22, 23],
								trueBearing: ['321', '141'],
								advertisedDepth: '6.8',
								length: 200,
							},
							{
								berths: [24, 25],
								trueBearing: ['001½', '181½'],
								advertisedDepth: '7.1',
								length: 190,
							},
						]
					}
				]
			};
		},
		created: function () {
			this.$http.get("/docks")
				.then(
					response => {
						this.docks = response.data
					}
				)
		}
	};
</script>
