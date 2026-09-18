
import {
  Cell,
  Label,
  Pie,
  PieChart,
} from "recharts"

import { ChartContainer } from "@/components/ui/chart"

const progress = 20

const chartData = [
  {
    name: "progress",
    value: progress,
    fill: "#EF4444",
  },
  {
    name: "remaining",
    value: 100 - progress,
    fill: "#FFFFFF",
  },
]

const chartConfig = {
  progress: {
    label: "Progresso",
    color: "#EF4444",
  },
  remaining: {
    label: "Restante",
    color: "#FFFFFF",
  },
}

export function ChartRadialShape() {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          startAngle={90}
          endAngle={-270}
          innerRadius={65}
          outerRadius={95}
          paddingAngle={0}
          stroke="none"
          cornerRadius={8}
        >
          {chartData.map((entry) => (
            <Cell
              key={entry.name}
              fill={entry.fill}
            />
          ))}
        </Pie>

        <Label
          content={({ viewBox }) => {
            if (
              viewBox &&
              "cx" in viewBox &&
              "cy" in viewBox
            ) {
              return (
                <text
                  x={viewBox.cx}
                  y={viewBox.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  <tspan
                    x={viewBox.cx}
                    y={viewBox.cy}
                    className="fill-foreground text-4xl font-bold"
                  >
                    {progress}%
                  </tspan>

                  <tspan
                    x={viewBox.cx}
                    y={(viewBox.cy || 0) + 24}
                    className="fill-muted-foreground"
                  >
                    Progresso
                  </tspan>
                </text>
              )
            }

            return null
          }}
        />
      </PieChart>
    </ChartContainer>
  )
}
